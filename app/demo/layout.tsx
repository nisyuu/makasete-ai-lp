import Layout from '@/components/demo/Layout';

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
