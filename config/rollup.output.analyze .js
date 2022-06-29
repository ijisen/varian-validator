import analyze from 'rollup-plugin-analyzer'
import { rollup } from "rollup";

rollup({
  entry: 'main.js',
  plugins: [analyze()]
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
