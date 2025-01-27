import { Activity, Users, Clock, Brain } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/stats-card';
import { StressLevelChart } from '@/components/dashboard/charts/stress-level-chart';
import { EngagementChart } from '@/components/dashboard/engagement-chart';
import { AlertsSection } from '@/components/dashboard/alerts-section';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <h1 className="text-xl font-bold">Dashboard RH</h1>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <main className="container mx-auto py-6 space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Nível Médio de Estresse"
            value="6.8/10"
            description="Último mês"
            icon={<Activity className="h-4 w-4" />}
            trend={{ value: 12, isPositive: false }}
          />
          <StatsCard
            title="Colaboradores Ativos"
            value="65%"
            description="Últimos 30 dias"
            icon={<Users className="h-4 w-4" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Tempo Médio de Uso"
            value="5.2 min"
            description="Por sessão"
            icon={<Clock className="h-4 w-4" />}
          />
          <StatsCard
            title="Sentimento Predominante"
            value="Ansiedade"
            description="Esta semana"
            icon={<Brain className="h-4 w-4" />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <StressLevelChart />
          <EngagementChart />
        </div>

        {/* Alerts Section */}
        <AlertsSection />

        {/* Insights Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Principais Insights</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ansiedade por Prazos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Aumento de 20% no último trimestre. Sugestão: Reavaliar cronogramas e promover treinamentos sobre gestão de tempo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Impacto na Retenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Usuários ativos do bot apresentam 35% menos probabilidade de deixar a empresa nos próximos 6 meses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Recursos Mais Utilizados</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top 3 Recursos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>Técnicas de Mindfulness</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Suporte Anônimo</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Agendamento Psicólogo</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}