import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Brand } from "./brand";
import { SiteNavigation } from "./navigation";

export function Header() {
  return (
    <header className="site-header">
      <Container className="flex min-h-header items-center justify-between gap-6">
        <Brand />
        <SiteNavigation items={navigation} resultsUrl={siteConfig.resultsUrl} />
      </Container>
    </header>
  );
}
