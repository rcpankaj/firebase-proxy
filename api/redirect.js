module.exports = (req, res) => {
  const redirectUrl = req.query.redirectUrl;
  if (redirectUrl) {
    res.writeHead(302, { Location: redirectUrl });
    res.end();
  } else {
    res.status(400).send("Redirect URL is missing");
  }
};
