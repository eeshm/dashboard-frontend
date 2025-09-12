import { create } from 'zustand';
import axios from 'axios';
export interface KPIData {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  percentage: string;
  color: 'pink' | 'orange' | 'green' | 'purple';
  icon: string;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface ProductData {
  id: number;
  name: string;
  popularity: number;
  sales: string;
}

interface DashboardState {
  // Data
  kpiData: KPIData[];
  visitorInsights: ChartData[];
  totalRevenue: ChartData[];
  customerSatisfaction: ChartData[];
  targetVsReality: ChartData[];
  volumeVsService: ChartData[];
  topProducts: ProductData[];
  
  // UI State
  isLoading: boolean;
  error: string | null;
  sidebarOpen: boolean;
  
  // Actions
  // setKpiData: (data: KPIData[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  fetchDashboardData: () => Promise<void>;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const useDashboardStore = create<DashboardState>((set, get) => ({
  // Initial mock data (Incaase API is not available but below we are fetching from API)
kpiData: [
    {
      id: '1',
      title: 'Total Sales',
      value: '$1k',
      subtitle: '+3% from yesterday',
      percentage: '+3%',
      color: 'pink',
      icon: '💰',
    },
    {
      id: '2',
      title: 'Total Order',
      value: 300,
      subtitle: '+5% from yesterday',
      percentage: '+5%',
      color: 'orange',
      icon: '📦',
    },
    {
      id: '3',
      title: 'Product Sold',
      value: 5,
      subtitle: '+1.2% from yesterday',
      percentage: '+1.2%',
      color: 'green',
      icon: '✅',
    },
    {
      id: '4',
      title: 'New Customers',
      value: 8,
      subtitle: '0.5% from yesterday',
      percentage: '0.5%',
      color: 'purple',
      icon: '👥',
    },
  ],
  
  visitorInsights: [
    { name: 'Jan', loyalCustomers: 200, newCustomers: 150, uniqueCustomers: 100 },
    { name: 'Feb', loyalCustomers: 180, newCustomers: 200, uniqueCustomers: 120 },
    { name: 'Mar', loyalCustomers: 220, newCustomers: 180, uniqueCustomers: 140 },
    { name: 'Apr', loyalCustomers: 280, newCustomers: 220, uniqueCustomers: 160 },
    { name: 'May', loyalCustomers: 250, newCustomers: 350, uniqueCustomers: 180 },
    { name: 'Jun', loyalCustomers: 320, newCustomers: 300, uniqueCustomers: 200 },
    { name: 'Jul', loyalCustomers: 280, newCustomers: 380, uniqueCustomers: 220 },
    { name: 'Sept', loyalCustomers: 350, newCustomers: 320, uniqueCustomers: 180 },
    { name: 'Oct', loyalCustomers: 300, newCustomers: 280, uniqueCustomers: 160 },
    { name: 'Nov', loyalCustomers: 280, newCustomers: 250, uniqueCustomers: 140 },
    { name: 'Dec', loyalCustomers: 250, newCustomers: 180, uniqueCustomers: 120 },
  ],
  
  totalRevenue: [
    { name: 'Monday', online: 15, offline: 10 },
    { name: 'Tuesday', online: 18, offline: 12 },
    { name: 'Wednesday', online: 8, offline: 25 },
    { name: 'Thursday', online: 20, offline: 5 },
    { name: 'Friday', online: 12, offline: 15 },
    { name: 'Saturday', online: 22, offline: 18 },
    { name: 'Sunday', online: 25, offline: 12 },
  ],
  
  customerSatisfaction: [
    { name: 'Week 1', lastMonth: 3.2, thisMonth: 4.0 },
    { name: 'Week 2', lastMonth: 3.5, thisMonth: 4.2 },
    { name: 'Week 3', lastMonth: 3.1, thisMonth: 4.1 },
    { name: 'Week 4', lastMonth: 3.8, thisMonth: 4.5 },
  ],
  
  targetVsReality: [
    { name: 'Jan', target: 12000, reality: 8500 },
    { name: 'Feb', target: 11000, reality: 9200 },
    { name: 'Mar', target: 13000, reality: 11800 },
    { name: 'Apr', target: 12500, reality: 10200 },
    { name: 'May', target: 14000, reality: 12500 },
    { name: 'June', target: 13500, reality: 11200 },
    { name: 'July', target: 15000, reality: 13800 },
  ],
  
  volumeVsService: [
    { name: 'Jan', volume: 1100, services: 800 },
    { name: 'Feb', volume: 1200, services: 900 },
    { name: 'Mar', volume: 900, services: 700 },
    { name: 'Apr', volume: 1000, services: 750 },
    { name: 'May', volume: 1300, services: 950 },
    { name: 'June', volume: 1150, services: 850 },
  ],
  
  topProducts: [
    { id: 1, name: 'Home Decor Range', popularity: 45, sales: '45%' },
    { id: 2, name: 'Disney Princess Pink Bag 13', popularity: 29, sales: '29%' },
    { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: '18%' },
    { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: '25%' },
  ],

  
  isLoading: false,
  error: null,
  sidebarOpen: true,
  
  // Actions
  // setKpiData: (data) => set({ kpiData: data }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setSidebarOpen: (close) => set({ sidebarOpen: close }),
  

  fetchDashboardData: async () => {
    try {
      set({ isLoading: false, error: null });

      // const[metricsRes,revenueRes,satisfactionRes,visitorRes,productsRes] = await Promise.all([
      //  axios.get(`${API_BASE_URL}/api/dashboard/metrics`),
      //   axios.get(`${API_BASE_URL}/api/dashboard/revenue`),
      //   axios.get(`${API_BASE_URL}/api/dashboard/customer-satisfaction`),
      //   axios.get(`${API_BASE_URL}/api/dashboard/visitor-insights`),
      //   axios.get(`${API_BASE_URL}/api/dashboard/top-products`),
      // // ]);
      //   set({
      //   kpiData: metricsRes?.data?.data?.data.metrics || [],
      //   totalRevenue: revenueRes.data.data.data.revenue || [],
      //   customerSatisfaction: satisfactionRes.data.data.data.data || [],
      //   visitorInsights: visitorRes.data.data.data.data || [],
      //   topProducts: productsRes.data.data.data.products || [],
      //   isLoading: false,
      // });
      // Simulate API delay
      // await new Promise(resolve => setTimeout(resolve, 1000));      
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch dashboard data' 
      });
    }
  },
}));