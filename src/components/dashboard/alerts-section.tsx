import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const alerts = [
  {
    title: "Aumento no Nível de Estresse",
    description: "Departamento de TI apresentou aumento de 25% no nível de estresse este mês.",
  },
  {
    title: "Pico de Uso do Bot",
    description: "Setor Comercial registrou uso 3x maior do bot na última semana.",
  },
  {
    title: "Tema Recorrente: Burnout",
    description: "15 colaboradores reportaram sintomas de burnout nos últimos 30 dias.",
  },
];

export function AlertsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Sinalizações Importantes</h2>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <Alert key={index} variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
}