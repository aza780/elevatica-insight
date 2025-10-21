import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, TrendingDown, FileText } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

interface Blog {
  id: string;
  title: string;
  content: string;
  pair: string;
  position: string;
  mean: number | null;
  median: number | null;
  mode: number | null;
  variance: number | null;
  stdev: number | null;
  pdf_url: string | null;
  created_at: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchBlog();
  }, [slug, user, navigate]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setBlog(data);

      if (data.pdf_url) {
        const { data: signedUrl } = await supabase.storage
          .from('research-pdfs')
          .createSignedUrl(data.pdf_url, 3600);
        
        if (signedUrl) {
          setPdfUrl(signedUrl.signedUrl);
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <p className="text-center text-muted-foreground">Research paper not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-gradient-gold text-black border-none">
                {blog.pair}
              </Badge>
              <Badge 
                variant="outline" 
                className={`${
                  blog.position === 'long' 
                    ? 'border-green-500 text-green-500' 
                    : 'border-red-500 text-red-500'
                }`}
              >
                {blog.position === 'long' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {blog.position.toUpperCase()}
              </Badge>
              <span className="text-muted-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {blog.title}
            </h1>
          </div>

          {/* Statistical Analysis Card */}
          {(blog.mean || blog.median || blog.mode || blog.variance || blog.stdev) && (
            <Card className="mb-8 bg-card border-border">
              <CardHeader>
                <CardTitle className="text-gold">Statistical Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {blog.mean !== null && (
                    <div>
                      <p className="text-muted-foreground text-sm">Mean</p>
                      <p className="text-2xl font-bold text-foreground">{blog.mean}</p>
                    </div>
                  )}
                  {blog.median !== null && (
                    <div>
                      <p className="text-muted-foreground text-sm">Median</p>
                      <p className="text-2xl font-bold text-foreground">{blog.median}</p>
                    </div>
                  )}
                  {blog.mode !== null && (
                    <div>
                      <p className="text-muted-foreground text-sm">Mode</p>
                      <p className="text-2xl font-bold text-foreground">{blog.mode}</p>
                    </div>
                  )}
                  {blog.variance !== null && (
                    <div>
                      <p className="text-muted-foreground text-sm">Variance</p>
                      <p className="text-2xl font-bold text-foreground">{blog.variance}</p>
                    </div>
                  )}
                  {blog.stdev !== null && (
                    <div>
                      <p className="text-muted-foreground text-sm">Standard Deviation</p>
                      <p className="text-2xl font-bold text-foreground">{blog.stdev}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-8 text-foreground leading-relaxed">
            <ReactMarkdown>
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* PDF Viewer */}
          {pdfUrl && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <FileText className="w-5 h-5 mr-2" />
                  Research Paper
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  src={pdfUrl}
                  className="w-full h-[800px] rounded-lg"
                  title="Research Paper PDF"
                />
              </CardContent>
            </Card>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
