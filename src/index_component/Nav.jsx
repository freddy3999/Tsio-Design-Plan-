import { useState, useEffect, useRef } from "react";
import logo from "../assets/icons/logo.svg";
import { NavLink } from "react-router";

// 桌機導覽項目（手機側邊選單另有一份，標籤不同：Articles 顯示為 News）
const NAV_ITEMS = [
	{ to: "/About", label: "About" },
	{ to: "/Plan", label: "Project" },
	{ to: "/Enroll", label: "Enroll" },
	{ to: "/Contact", label: "Contact" },
	{ to: "/Articles", label: "Article" },
];

export default function Nav() {
	const [visible, setVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			if (menuOpen) {
				setVisible(true);
				return;
			}
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY.current) {
				setVisible(false);
			} else {
				setVisible(true);
			}
			lastScrollY.current = currentScrollY;
			1;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [menuOpen]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuOpen && !event.target.closest("nav")) {
				setMenuOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, [menuOpen]);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuOpen]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleNavLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<>
			{/* Main Navigation Bar */}
			<nav
				className={`
                    fixed top-0 left-0 right-0 py-[4.5vh]
                    
                    transition-transform duration-[var(--motion-base)] ease-[var(--motion-ease-spring)]
                    ${visible ? "translate-y-0" : "-translate-y-full"}
                    z-50
                `}
			>
				<div className="w-[92.2vw] mx-auto">
					<div className="w-full flex justify-between items-center lg:justify-between">
						{/* 【變更 2】當選單展開時，動態隱藏 Logo */}
						<NavLink
							to="/"
							onClick={handleNavLinkClick}
							className={`transition-opacity duration-[var(--motion-base)] ${menuOpen ? "opacity-0" : "opacity-100"
								}`}
						>
							<img
								className="w-[150px] h-auto lg:w-[250px]"
								src={logo}
								alt="tsio_design_plan logo"
							/>
						</NavLink>

						<button
							onClick={toggleMenu}
							aria-label="導覽列開關"
							// 按鈕的 z-index 保持在 z-60，或是不設定 (因為父層 nav 已經是 z-50 最高了)
							className={`lg:hidden z-60 relative ${menuOpen ? `text-white` : `text-primary`
								}`}
						>
							<div className="w-6 h-6 flex flex-col justify-center items-center">
								<span
									className={`w-6 h-0.5 bg-current transition-all duration-[var(--motion-base)] ease-[var(--motion-ease-spring)] ${menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
										}`}
								></span>
								<span
									className={`w-6 h-0.5 bg-current transition-all duration-[var(--motion-base)] ease-[var(--motion-ease-spring)] ${menuOpen ? "opacity-0" : "opacity-100"
										}`}
								></span>
								<span
									className={`w-6 h-0.5 bg-current transition-all duration-[var(--motion-base)] ease-[var(--motion-ease-spring)] ${menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
										}`}
								></span>
							</div>
						</button>

						{/* ... Desktop ul ... */}
						<ul className="hidden lg:flex space-x-[60px] bodyText-large-bold-web ">
							{NAV_ITEMS.map(({ to, label }) => (
								<li key={to}>
									<NavLink to={to} className="nav-underline">
										{label}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>

			<div
				className={`
                fixed inset-0 z-40 lg:hidden transition-opacity duration-[var(--motion-base)]
                ${menuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
					}
            `}
			>
				<div
					className="absolute inset-0 bg-primary opacity-70 h-screen"
					onClick={() => setMenuOpen(false)}
				></div>

				<div
					className={`
                    absolute top-0 right-0 h-screen w-80 max-w-[85vw] 
                    bg-primary shadow-xl 
                    transform transition-transform duration-[var(--motion-base)] ease-[var(--motion-ease-spring)]
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
				>
					<div className="pt-32 px-8">
						<ul className=" space-y-8 text-white text-lg">
							{/* ... NavLink list items ... */}
							<li>
								<NavLink
									to="/About"
									onClick={handleNavLinkClick}
									className="block py-2 hover:text-gray-300 transition-colors"
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Plan"
									onClick={handleNavLinkClick}
									className="block py-2 hover:text-gray-300 transition-colors"
								>
									Project
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Enroll"
									onClick={handleNavLinkClick}
									className="block py-2 hover:text-gray-300 transition-colors"
								>
									Enroll
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Contact"
									onClick={handleNavLinkClick}
									className="block py-2 hover:text-gray-300 transition-colors"
								>
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Articles"
									onClick={handleNavLinkClick}
									className="block py-2 hover:text-gray-300 transition-colors"
								>
									News
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
