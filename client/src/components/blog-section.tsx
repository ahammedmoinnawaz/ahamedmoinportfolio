import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"]
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in data analysis and visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recently"}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime || 5} min read</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 hover:text-blue-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags?.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-very-light text-royal-blue text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-primary hover:text-royal-blue font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe to get the latest data analysis tips and tutorials delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-blue-primary hover:bg-royal-blue">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
