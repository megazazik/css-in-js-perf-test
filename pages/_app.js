import '../styles/globals.css'
import { Metric } from "../components/Metric";
import { Menu } from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>{`
        .container{
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        } 
        .row{
          display:flex;
          flex-direction: row;
          margin-right: -15px;
          margin-left: -15px;
        }
        .row>*{
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
        }
        aside{
          flex-basis: 300px;
          border-right: 1px solid rgba(0,0,0,.1);
        }
      `}</style>
      <div className="container">
        <div className="row">
          <aside>
            <Menu />
            <br />
            <Metric />
          </aside>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}

export function reportWebVitals(metric) {
  if (metric.name === "Next.js-route-change-to-render")
    return;
  Metric.add({
    name: metric.name,
    value: metric.value,
    page: location.pathname
  })
}

export default MyApp
