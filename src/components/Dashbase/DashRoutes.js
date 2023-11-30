import { Outlet } from "react-router-dom";

// icons
import DashboardIcon from "assets/icons/dashboard-icon.svg";
import WalletIcon from "assets/icons/wallet-icon.svg";
import TransactionsIcon from "assets/icons/transactions-icon.svg";
import AnalyticsIcon from "assets/icons/analytics-icon.svg";
import MarketingIcon from "assets/icons/marketing-icon.svg";
import RatesIcon from "assets/icons/rates-icon.svg";
import CheckoutIcon from "assets/icons/checkout-icon.svg";
import LinksIcon from "assets/icons/link-icon.svg";
import WireIcon from "assets/icons/wire-icon.svg";

// pages

const dashRoutes = [
	{
		title: "Main pages",
		component: () => <Outlet />,
		routes: [
			{
				icon: DashboardIcon,
				title: "Dashboard",
				path: "/",
				component: () => <Outlet />,
			},
			{
				icon: WalletIcon,
				title: "Balances",
				path: "/balances",
				component: () => <Outlet />,
			},
			{
				icon: TransactionsIcon,
				title: "Transactions",
				path: "/transactions",
				component: () => <Outlet />,
			},
			{
				icon: AnalyticsIcon,
				title: "Analytics",
				path: "/analytics",
				component: () => <Outlet />,
			},
			{
				icon: MarketingIcon,
				title: "Marketing",
				path: "/marketing",
				component: () => <Outlet />,
			},
			{
				icon: RatesIcon,
				title: "Exchange rates",
				path: "/exchange-rates",
				component: () => <Outlet />,
			},
		],
	},
	{
		title: "Accept payments",
		component: () => <Outlet />,
		routes: [
			{
				icon: CheckoutIcon,
				title: "Checkout",
				path: "/checkout",
				component: () => <Outlet />,
			},
			{
				icon: LinksIcon,
				title: "Payment Links",
				path: "/payment-links",
				component: () => <Outlet />,
			},
		],
	},
	{
		title: "Send payments",
		component: () => <Outlet />,
		routes: [
			{
				icon: WireIcon,
				title: "Wire",
				path: "/wire",
				component: () => <Outlet />,
			},
		],
	},
];

export default dashRoutes;
