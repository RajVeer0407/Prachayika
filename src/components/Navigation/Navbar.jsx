import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";

const Navbar = ({ toggleDrawer, routes }) => {
  const location = useLocation();

  return (
    <SNavbar>
      <NavContainer>
        <BrandSection>
          <DrawerButton onClick={toggleDrawer} whileTap={{ scale: 0.9 }}>
            <FaBars />
          </DrawerButton>

          <LogoContainer>
            <img src="https://picsum.photos/40" alt="logo" /> // Replace with
            your logo URL
          </LogoContainer>

          <SNavbarBrand>Prachayika</SNavbarBrand>
        </BrandSection>

        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              const isActive = location.pathname === route.link;
              if (route.subRoutes)
                return <Menu route={route} key={route.name} />;

              return (
                <NavRoute to={route.link} key={route.name}>
                  <RouteText $active={isActive}>{route.name}</RouteText>

                  {isActive && (
                    <ActivePill
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <LoginButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Login
            </LoginButton>
          </Link>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const SNavbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(159, 227, 214, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SNavbarBrand = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  @media (max-width: 850px) {
    display: none;
  }
`;

const NavRoutes = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
  @media (max-width: 850px) {
    display: none;
  }
`;

const NavRoute = styled(Link)`
  position: relative;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RouteText = styled.span`
  position: relative;
  z-index: 2;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => (props.$active ? "#000" : "#666")};
  transition: color 0.3s ease;
`;

const ActivePill = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #9fe3d6; /* Your brand color */
  border-radius: 12px;
  z-index: 1;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DrawerButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  display: flex;
  @media (min-width: 851px) {
    display: none;
  }
`;

const LoginButton = styled(motion.button)`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 0.7rem 1.6rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;
