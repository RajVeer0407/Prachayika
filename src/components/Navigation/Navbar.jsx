import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import "./NavbarStyles.css"

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar className="snavbar">
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <div className="kkkk" ><img src="https://lh3.googleusercontent.com/fife/ALs6j_EjZ1MwKgQXY4c4u4Y6J3ICniPHMM5dep3_ZvdQoBLxuvTm0mWqvf8kPvWsDOjgKaEPTGflXUPOydghV698GsNaUIPQZ3Blz7z9YcIBK7AmqdYBvdapBjrGjUcBsTkw8qGs3taqiY57OKGY9PtTmHQjjnmNomhvxDiC2S-0F3789ne-FySkYxB3xpUz1-QEyLdAhuD_dk5HoCF0JqBVviG_pvm6X8HU_xI0LAn-A1N8GBIkcWfe6JKriQqANdi10mO-eyBaRmvBT4hgZ9IEhagjnztFlCBFA3Htl-I5FEfofdzSQmF4sKfbvj9IHkqOoiGQa9ReVKWsHQd8jQkAnUZo7otvv-JP7wWe0mG3X-hZBdhlSYudxQ-ACPARdePxihqxZxNKi3uCJLvUpL5F5ODrBvgN2LT_zrYHaJFo6TXixjzmT2esIlhsZj-E7fKVEWgAVKpVAS43Z7LcSLVvU78z9eRE5lgqQ_gQ09UMeOqqs-6AOQW-NEC-Rd0p5omu2drkOppjZsrJkd_OPdZ3RfpiVaDgrj8Vqi7AN7HyQm_YNXY39JZbvIG9Opcy6Pd7y8t_YcvzbV37XrtktDXshwq47xaqIgdvXz_nBccGYDZ8VS03Jm4ewwA6q17d7JSTg4p2oyG1KtHVURinyw08l7ib4x9Ap7c3y8rUmW5lB38YcB0oVDqxpOUlLIbAgxJvgwBKI0nZNWpbfmIhwLGKbpOoY-1ELt9o3KssNv4aq6WdFdnKWpeeDjs72MIQHphz80TeulFipEhRakMHRnjIn5L2Z3Ozo-SPLBNrdIrej5_M5ApdNpw_4TJyAU6ku_HI92GSZ2nqwCnECB8z3-1y-V8e7a94efof0LmbAhd9lU9rbS3KzyWCRXhXPERvorUzlUfa2vr5oPW3EAAu45dr3XTjRNrAovi_jdQu5DOOqZCsQlEhwn7gdDWDO1SCwQB85kHoqosocmbLhr67ZDhX3Cp1FPIXO4IAvB59aieRLSh44X1nfWfrDp_uzQavo4x56qGuTqfV8NjC_18CzFIjDTu32khrdAoXm8bU5FlStNNTy8NK9e8ByUC4RqRkJ4BkITPAtlAVa8p-1BVqBws-sQnaJsGUbm3Lsylmj8a7Mi8wRCqxNTcYgk7GFdVQReZCg_VEsXvISkjJFU7gkeLYP-GAXMUjbRJC29pIp7yAYpvcAAnGJ8BYeTfWILGm-wtHCS2id7Q7bjMNE6NgdPE5mQ4qHIOjdOiWrhoJ9lQDTYkW_7HZwmDMyESTtjrcG9XKa-eXXn1SNBDM4Y5YNBufhCug0G8q4H7fVgjx7GGvwuGYxL6C3zTZQlLY8wZUJR79vKYnv74uZDXAcNJKQOOvWuhg5QBqP6eqeAYhynFDsI_NyltwNbVN1oh4fmxEECB29cfELlxMkB-5rZWlUxD8kAMlrk_AtQ7a3L6dW-uFJcu9THuKMgcNn9Qv-Qig8PG2XGUiuafkaGV9X6qgjHs3MjaO2tCl8YmSsxZfYEd2AJxb_-93kWwICjPa7GrFLQDrScjoXcYimbham3_iUMEDmbnZkjLQrWWls7a-Mgg5reEkNyM2ohnN6m8ZGxSxGgrLAkd5clXEpbCzADBIHFidIvK6LqzuCLQeLhjnxVzMDFCxIJ1lMXlDptCGrtRJlfgsA3iY7ZGMxTtm_Dh0ocRC7TSj0FEWgXcIcVu8qXa_pQz-vgHPNC4rNEW-kro2Ggm5-RRTiYzQke5RQuutjtc4ukPU3cS1cJRJhxe5mdwLrkl-QJHOjeJ4METescf2cR7YowjphdpF1oT1H-Vlg-IFgZ92Bsvs3hUeBNriGwIP5fqTdm-plwIAlOePfTmiwEk-NXfPKpmj0C1eBlJ2JXrsmMYuPsuGJYvSCpU5xS073lFP-i8sCYHr6FVymXbsLqVI9ecQ3KmEREfe-Grteo86afDm08BCLK_hNdkAewKWdVJNvX6JaRytlqCJmvGqGhpFsCgnLOLz18Gd3ndEkHgF_i6PpYa6UWp3ub-Jlt3GhhOdESTxJiLgNwSphcVJ4ol1XmtHz9Y2exOrLgTnJ6FFWECfz0Y05gQhtlXwYnF67YY2pJIneY0TPEu-rh5n4Y-V7iQvaHgWfXt1KNbRncAi15AHB_b98URs1IoEU_Ga8z_gjFaj3rR1ZQjC4cBotJsAjOcIFyzcMalL5rGBULRNvp44OL8_WwTz-smU5Z2edK6ThL6Jjxvt7F1S9dKmye3DQcFN8EyukX9XCtz5g0__DWmFsu5Sj_KulMVdKQGnoIVUf2cT1cmMyso5p_AGg-b_9CHmazmQiLekaK1FfyAY1CD3OLB-ZOsaWTAWMcI95r1Fn3OlGOr20EOH3mkjEt5QoJDh6kX0BYbUeUxJgpEmHdp_rS8snoKVh-mkXoCxdTQTHgj8XYUP1DRVbpghsFDHkOK9hT6fK7n4NXqD9QHWnHceTx7zCNLEtnqlmlS0wALS3dvo2l1HqIWN5udwPiFxXDHl9sGhskWcAgJZHo89lJJq5mvgjeSE1xF8zFI2e9_UYq5Rg9LowB5gQpPcSyPX2oHCcL0EFdFnouqLWiggl-QteHWMHwxR4JdXlermAv3XXpZxTLH1v3tXvSf3pWDHVAuSEREW2yKVq2c6Y18O14ra9k3M-pH1FaE3g17PI5sVqG58t4TQlZggMTIL8S78XwMaIubSt5yyNPmabW0VdluycrWvkn3wyi6Xzp4HxbWVwuHutLQJJNnMcwnxcRARwtV08x24-EYhXyVtwDgVzreoe3NNBL1sUm8C8wy88PYWTTRv3rPFDUIrN0hbwvDidE1xPAvooFJ-DvjQXSGOgb29MJHV-NTJvD9Q3u1yF1k-2EmpVsLMRL_C6uVi0t9HxMIhSUlgAJpY-aZ4WMpc4xljBc8ottozQMDVCrJHPR4gzTlvJ-yUE6BqH37IjXbwx9Nw9_JT0poavRl9Wh-N61CdaxMcI2frL76czklfqCQTGF7Ddi1sSShnqptNRfpGQTIHnVWg3Zbjv1CRI_OxgSgnQsTe7gJSqU96_4SR1kc1zIFa2-rUKCPfsgq4IKWcPAS1gejljntkAhNagfHCziQr6CG9f222TPyLDyZlx45NX2Z_HPdMd_mRSUSQZsBLXpjO5YxUwEQNOaZIL_VagXwCDjare6wvZCGe_Saw9qpYFZC-X_ZYVWL8tAR8tbdQaSTOT7MBMazXa-vGERqJEheVveKMFS0cGto_iYhpJNEXM-9om8eTYkadGHQef6cmO4ZXxny14BRckC5F-2e3TgBwO4eqZiDE7zqtfmdG7iXFtK-X3PowhWzOPpuFENxiYUVDbe0qyB7DcI_EsK9Q2vPgNZO7F_RxxUnpvTpLwbYtDJSrA_Nz7rzUA2dduUjmlU3lK3gb1EPKXHx5TjRQQFLaaoFwqrGO9yilllSgnkrhdShAT3LVzkin1MRe6teoylIiz6cgSOQB2Ezewspdw8LmjeXxQm4_cVsE0CNcQNPUamUyNNHNw5zKTe2R59456pgpZ0FRJ34TgMIjnVo=s854-w854-h854-s-no?authuser=3"/></div>
        <SNavbarBrand>Prachayika</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          {/* <LoginButton>Login</LoginButton> */}
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
background-color: rgb(159, 227, 214);
position: fixed;
width: 100%;
z-index: 9999;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 55px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
const SNavbarBrand = styled.h2`
color: #222;
cursor: pointer;
font-size: 2rem;
@media (max-width: 768px) {
  display: none;
}
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
    font-weight: 600;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.3s ease;
    color: black;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button` 
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;
