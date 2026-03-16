// interview 1digitalStack.ai

//Challenge 1: Foundational Problem
// Time Estimate: 10 minutes
// Problem:
// Given an input string str, return the string with its characters reversed
// Challenge 2: React Dashboard Challenge
// Time Estimate: 40 minutes
// Objective
// Build a modular React dashboard system that can support multiple variants. The system should be configuration-driven and must support at least two distinct dashboard variants.
// Core Requirements
// Dashboard Variants: The system must render two different dashboard layouts.
// Each variant must have a different title.
// Each variant must render the same set of widgets but in a different order.
// Configuration-Driven: The layout and rendering must be controlled by a configuration object. This configuration should define:
// The dashboard title.
// The order of the widgets to be rendered.
// Modularity & Efficiency:
// Avoid duplicating dashboard or widget components.
// Structure the code so that adding a new dashboard variant in the future requires minimal changes to the existing component logic.
// Discussion Points
// Please be ready to explain the following aspects of your solution:
// Your structure and architecture decisions (e.g., how you separated concerns).
// How your current solution is designed to scale to support a larger number of dashboard variants.
// How you would approach adding new widget types to your system in the future.

// sol starts from here
// 1. Architecture Overview

// Key ideas used:

// Configuration-driven dashboards

// Each dashboard variant is defined in a config object.

// Config contains:

// title

// widgets order

// Widget Registry

// Maps widget names → widget components.

// Prevents conditional rendering logic everywhere.

// Reusable Dashboard Renderer

// One generic dashboard component renders any variant.

// Composable Widgets

// Widgets are independent components.

// 2. Folder Structure
// src
//  ├── components
//  │    ├── Dashboard.jsx
//  │    ├── WidgetRenderer.jsx
//  │
//  ├── widgets
//  │    ├── SalesWidget.jsx
//  │    ├── UsersWidget.jsx
//  │    ├── RevenueWidget.jsx
//  │
//  ├── config
//  │    └── dashboardConfig.js
//  │
//  ├── registry
//  │    └── widgetRegistry.js
//  │
//  └── App.jsx

// This structure cleanly separates:

// config

// widgets

// render logic

// 3. Dashboard Configuration

// config/dashboardConfig.js

// export const dashboards = {
//   dashboardA: {
//     title: "Sales Overview Dashboard",
//     widgets: ["sales", "users", "revenue"]
//   },

//   dashboardB: {
//     title: "Business Insights Dashboard",
//     widgets: ["revenue", "sales", "users"]
//   }
// };

// Key point:

// Same widgets

// Different order

// Different titles

// 4. Widget Components

// Example widgets.

// widgets/SalesWidget.jsx

// const SalesWidget = () => {
//   return (
//     <div className="widget">
//       <h3>Sales</h3>
//       <p>Sales data here</p>
//     </div>
//   );
// };

// export default SalesWidget;

// widgets/UsersWidget.jsx

// const UsersWidget = () => {
//   return (
//     <div className="widget">
//       <h3>Users</h3>
//       <p>User analytics here</p>
//     </div>
//   );
// };

// export default UsersWidget;

// widgets/RevenueWidget.jsx

// const RevenueWidget = () => {
//   return (
//     <div className="widget">
//       <h3>Revenue</h3>
//       <p>Revenue insights here</p>
//     </div>
//   );
// };

// export default RevenueWidget;
// 5. Widget Registry

// Central mapping of widget name → component.

// registry/widgetRegistry.js

// import SalesWidget from "../widgets/SalesWidget";
// import UsersWidget from "../widgets/UsersWidget";
// import RevenueWidget from "../widgets/RevenueWidget";

// export const widgetRegistry = {
//   sales: SalesWidget,
//   users: UsersWidget,
//   revenue: RevenueWidget
// };

// This avoids large switch or if statements.

// 6. Widget Renderer

// components/WidgetRenderer.jsx

// import { widgetRegistry } from "../registry/widgetRegistry";

// const WidgetRenderer = ({ widgetKey }) => {
//   const WidgetComponent = widgetRegistry[widgetKey];

//   if (!WidgetComponent) {
//     return <div>Unknown widget: {widgetKey}</div>;
//   }

//   return <WidgetComponent />;
// };

// export default WidgetRenderer;
// 7. Dashboard Component

// components/Dashboard.jsx

// import WidgetRenderer from "./WidgetRenderer";

// const Dashboard = ({ config }) => {
//   return (
//     <div>
//       <h1>{config.title}</h1>

//       <div className="dashboard-grid">
//         {config.widgets.map((widget) => (
//           <WidgetRenderer key={widget} widgetKey={widget} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// 8. App Entry

// App.jsx

// import Dashboard from "./components/Dashboard";
// import { dashboards } from "./config/dashboardConfig";

// function App() {
//   const activeDashboard = dashboards.dashboardA;

//   return (
//     <div>
//       <Dashboard config={activeDashboard} />
//     </div>
//   );
// }

// export default App;

// Switching dashboards:

// const activeDashboard = dashboards.dashboardB;
// 9. Discussion Points (Interview Explanation)
// 1️⃣ Structure & Architecture Decisions

// The system is separated into four concerns:

// Concern	Responsibility
// Config	Defines dashboard variants
// Widgets	Individual UI blocks
// Registry	Maps widget keys → components
// Renderer	Renders widgets dynamically

// Benefits:

// No duplicated dashboard code

// Widgets are reusable

// Layouts controlled by config

// 2️⃣ Scalability for More Dashboard Variants

// To add a new dashboard variant:

// Just modify the config.

// dashboardC: {
//   title: "Executive Dashboard",
//   widgets: ["users", "revenue", "sales"]
// }

// No component logic changes required.

// This works for 10+ dashboards easily.

// 3️⃣ Adding New Widget Types

// Steps to add a widget:

// 1. Create component
// widgets/ConversionWidget.jsx
// 2. Register widget
// conversion: ConversionWidget
// 3. Use in config
// widgets: ["sales", "conversion", "revenue"]

// No changes needed in Dashboard or Renderer.

// 4. Optional Improvements (Senior-Level)

// If interviewer asks how to improve:

// Lazy loading widgets
// const SalesWidget = React.lazy(() => import("../widgets/SalesWidget"));

// Improves performance for large dashboards.

// Drag-and-Drop Layouts

// Use libraries like:

// react-grid-layout

// API Driven Config

// Config could come from backend:

// GET /dashboard-config

// Allowing user-customizable dashboards.

// 5. Why This Solution is Good

// ✅ Config-driven
// ✅ No duplicated components
// ✅ Easily scalable
// ✅ Widgets decoupled
// ✅ Clean architecture
