export interface DashboardData {
    costData: ChartData;
    efficiencyData: ChartData;
  }
  
  export interface ChartData {
    labels: string[];
    datasets: Dataset[];
  }
  
  interface Dataset {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }
  
  export interface FilterChangeEvent {
    target: { value: string };
  }
  