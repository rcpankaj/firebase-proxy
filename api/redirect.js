module.exports = (req, res) => {
  res.writeHead(302, {
    Location: "tagocash%3A%2F%2Fpublic%2Fcontinue_with_email",
  });
  res.end();
};
