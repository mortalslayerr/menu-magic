import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  UtensilsCrossed,
  BookImage,
  Settings,
  Eye,
  MousePointerClick,
  TrendingUp,
  Users,
  Menu,
  X,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: UtensilsCrossed, label: 'Menu Builder', active: false },
  { icon: BookImage, label: 'Stories', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

const stats = [
  { label: 'Menu Views', value: '12,847', change: '+18%', icon: Eye },
  { label: 'Item Clicks', value: '3,291', change: '+12%', icon: MousePointerClick },
  { label: 'QR Scans', value: '8,456', change: '+24%', icon: TrendingUp },
  { label: 'Unique Visitors', value: '6,120', change: '+9%', icon: Users },
];

const chartData = [
  { day: 'Mon', views: 1200 },
  { day: 'Tue', views: 1800 },
  { day: 'Wed', views: 2200 },
  { day: 'Thu', views: 1900 },
  { day: 'Fri', views: 2800 },
  { day: 'Sat', views: 3200 },
  { day: 'Sun', views: 2700 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-card p-2 shadow-md lg:hidden"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-3 px-6 py-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary">
              <UtensilsCrossed className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">QR-Menus</h2>
              <p className="text-xs text-sidebar-foreground/60">Admin Panel</p>
            </div>
          </div>

          <nav className="mt-4 flex-1 space-y-1 px-3">
            {navItems.map(item => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-body text-sm transition-colors ${
                  item.active
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="px-6 pb-6">
            <div className="rounded-xl bg-sidebar-accent p-4">
              <p className="font-body text-xs text-sidebar-foreground/60">Current Plan</p>
              <p className="font-display text-sm font-semibold">Pro Plan</p>
              <p className="mt-1 font-body text-xs text-sidebar-foreground/40">3 restaurants</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-1 font-body text-muted-foreground">
              Saffron & Sage — Last 7 days
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-center justify-between">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="rounded-full bg-veg/10 px-2 py-0.5 font-body text-xs font-semibold text-veg">
                    {stat.change}
                  </span>
                </div>
                <p className="mt-3 font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card mt-8 p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Menu Views — This Week
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(24, 85%, 52%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(24, 85%, 52%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 20%, 88%)" />
                <XAxis
                  dataKey="day"
                  stroke="hsl(20, 10%, 45%)"
                  fontSize={12}
                  fontFamily="DM Sans"
                />
                <YAxis
                  stroke="hsl(20, 10%, 45%)"
                  fontSize={12}
                  fontFamily="DM Sans"
                />
                <Tooltip
                  contentStyle={{
                    background: 'hsl(0, 0%, 100%)',
                    border: '1px solid hsl(35, 20%, 88%)',
                    borderRadius: '12px',
                    fontFamily: 'DM Sans',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(24, 85%, 52%)"
                  strokeWidth={2}
                  fill="url(#viewsGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top Items */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card mt-6 p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Most Clicked Items
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Butter Chicken', clicks: 847, pct: 100 },
                { name: 'Chicken Biryani', clicks: 623, pct: 73 },
                { name: 'Paneer Tikka', clicks: 512, pct: 60 },
                { name: 'Mango Lassi', clicks: 398, pct: 47 },
                { name: 'Dal Makhani', clicks: 289, pct: 34 },
              ].map(item => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between font-body text-sm">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-muted-foreground">{item.clicks} clicks</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
