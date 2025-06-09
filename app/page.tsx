import Image from "next/image";
import { Header } from "./components/shared/header";
import './assets/css/style.scss';
import { Banner } from "./components/shared/banner";
import { Access } from "./components/shared/access";
import { Footer } from "./components/shared/footer";
import { TrustUs } from "./components/shared/trustUs";
import { Plans } from "./components/shared/plans";
import { Otziv } from "./components/shared/otziv";
import { Questions } from "./components/shared/question";
import { InfoBlock } from "./components/shared/infoBlock";
import { Slider } from "./components/shared/slider";
import { Scroll } from "./components/shared/scroll";
export default function Home() {
  return (
<>
<Header/>
<Banner/>
<Scroll/>
<Access/>
<Slider/>
<InfoBlock/>
<Otziv/>
<Plans/>
<TrustUs/>
 <Questions/>
<Footer/>
</>
  );
}
