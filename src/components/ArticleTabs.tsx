import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogFormData } from "@/types/blog";

interface ArticleTabsProps {
  popularArticles: BlogFormData[];
  recentArticles: BlogFormData[];
  upcomingArticles: BlogFormData[];
  onTabChange: (value: string) => void;
}

export function ArticleTabs({ 
  popularArticles, 
  recentArticles, 
  upcomingArticles,
  onTabChange 
}: ArticleTabsProps) {
  return (
    <Tabs defaultValue="popular" className="w-full" onValueChange={onTabChange}>
      <TabsList>
        <TabsTrigger value="popular">Popular</TabsTrigger>
        <TabsTrigger value="recent">Recent</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
      </TabsList>

      <TabsContent value="popular" className="space-y-4">
        {popularArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/article/${article.slug}`}
            className="flex gap-4 group hover:bg-gray-100 p-2 rounded-lg"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-32 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
        <Button variant="outline" className="w-full">Load More</Button>
      </TabsContent>

      <TabsContent value="recent" className="space-y-4">
        {recentArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/article/${article.slug}`}
            className="flex gap-4 group hover:bg-gray-100 p-2 rounded-lg"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-32 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
        <Button variant="outline" className="w-full">Load More</Button>
      </TabsContent>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/article/${article.slug}`}
            className="flex gap-4 group hover:bg-gray-100 p-2 rounded-lg"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-32 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500">
                Coming {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
        <Button variant="outline" className="w-full">Load More</Button>
      </TabsContent>
    </Tabs>
  );
}