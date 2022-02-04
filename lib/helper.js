const getInitialProps = async (ctx) => {
  console.log("work");
  const cookie = parseCookies(req);
  return {
    user: cookie.user,
  };
};
