import chalk from 'chalk'

const Callback = (req: any, res: any) => {
  console.log(req.cookies);

  console.log(req.user);

  res.redirect("/");
  
};

export default Callback;
