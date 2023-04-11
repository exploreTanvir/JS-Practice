// simple project with string method

var tweet = prompt("Copose your tweet");

var slicedTweet = tweet.slice(0, 140);
alert(
  slicedTweet +
    "\n\n\nYour original tweet size was : " +
    tweet.length +
    "\nAnd tweet size is : " +
    slicedTweet.length
);
