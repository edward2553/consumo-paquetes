// @ts-ignore
import "./App.css";
import { Button } from 'em-storybook-components';
// const product : Product = {
//   id: '1',
//   title: 'Edward el mejor',
//   img: "https://img.asmedia.epimg.net/resizer/JW4FdtBWvUm2aOrbWWp433ZyICA=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/TBIYHZED4VNALBXST23EKIFQNA.jpg"
// }

// function App() {
//   return (
//     <div className="App-header">
//       <ProductCard
//         product={product}
//         initialValues={{
//           count: 4,
//           maxCount: 10,
//         }}
//       >
//         {({count, increaseBy}) => (
//           <>
//             <ProductImage />
//             <ProductTitle title='Alegria' />
//             <ProductButtons />
//           </>
//         )}
//       </ProductCard>
//     </div>
//   );
// }

function App() {
    return (
      <div className="App-header">
        <Button label={"test"} backgroundColor="red" primary />
      </div>
    );
  }

export default App;
