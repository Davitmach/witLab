import Image from "next/image";
import { Header } from "./components/shared/header";
import './assets/css/style.scss';
import { Banner } from "./components/shared/banner";
import { Access } from "./components/shared/access";
import { Footer } from "./components/shared/footer";
import { TrustUs } from "./components/shared/trustUs";
import { Plans } from "./components/shared/plans";
import { Otziv } from "./components/shared/otziv";
export default function Home() {
  return (
<>
<Header/>
<Banner/>
<Access/>
<Otziv/>
<Plans/>
<TrustUs/>
 
<Footer/>
</>
  );
}
