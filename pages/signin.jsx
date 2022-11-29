// import { checkCookies, getCookie, getCookies } from 'cookies-next';

// function signin() {
//   return (
//     <div>
//       <a href="/api/google">Login with Google</a>
//     </div>
//   );
// }

// export default signin;

// export async function getServerSideProps({ req, res }) {
//   try {
//     const cookieExists = getCookie('token', { req, res });
//     console.log(cookieExists);
//     if (cookieExists) return { redirect: { destination: '/manager' } };
//     return { props: {} };
//   } catch (err) {
//     return { props: {} };
//   }
// }
