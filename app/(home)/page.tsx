import { fetchPortfolioData } from '@/lib/strapi';
import { PortfolioClient } from '@/components/PortfolioClient';

export default async function Home() {
  const data = await fetchPortfolioData();
  return (
    <PortfolioClient {...data} />
  );
};