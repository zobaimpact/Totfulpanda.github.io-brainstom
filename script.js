  //Declare global variables
  
  let sportsQuotes;
  let startupQuotes;
  let lifeQuotes;
  let relationshipQuotes;
  let christianityQuotes;
  let movieQuotes;

  //Quotes Containers
  
  startupQuotes = [ 
    {
      quote: "If you make the Internet, live on the internet.",  
      author: "Matthew Mullenweg, WordPress"
    }, 
    
    {
      quote: "Find something you love and do it better than everyone else.",
      author: "Gurbaksh Chahal, RadiumOne"
    },

    {
      quote: "I find it best to dive right in and learn the hard way.",
      author: "Pete Cashmore, Mashable"
    },

    {
      quote: "If you do the things that are easier first, then you can actually make a lot of progress.",
      author: "Mark Zuckerberg, Facebook"
    },

    {
      quote: "A hard thing is done by figuring out how to start.",
      author: "Rand Fishkin, SEOmoz"
    },

    {
      quote: "To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.",
      author: "Catherine Cook, MyYearbook"
    },

    {
      quote: "Everything started as nothing.",
      author: "Ben Weissenstein, Grand Slam Garage Sales"
    },

    {
      quote: "I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
      author: "Matt Mullenweg, WordPress"
    },

    {
      quote: "I think I was very naïve early on, but that also meant I didn’t know what couldn’t be done.",
      author: "Matt Mickiewicz, 99 Designs"
    },

    {
      quote: "It’s not about how many years of experience you have. It’s about the quality of your years of experience.",
      author: "Jacob Cass, Logo of the Day"
    },

    {
      quote: "Every single person I know who is successful at what they do is successful because they love doing it.",
      author: "Joe Penna, Mystery Guitar Man"
    },

    {
      quote: "My number one piece of advice is: you should learn how to program.",
      author: "Mark Zuckerberg, Facebook"
    },

    {
      quote: "Focusing on one thing and doing it really, really well can get you very far.",
      author: "Kevin Systrom, Instagram"
    },

    {
      quote: "Success is defined in units of fun. It’s all about being happy.",
      author: "Jake Nickell, Threadless"
    },
    {
      quote: "Solving specific problems is what drives me. I am not interested in having a career. I never have been.",
      author: "Sean Parker, Napster"
    },

    {
      quote: "I’m here to build something for the long-term. Anything else is a distraction.",
      author: "Mark Zuckerberg, Facebook"
    },

    {
      quote: "One can get anything if he is willing to help enough others get what they want.",
      author: "Zig Ziglar, Motivational Speaker"
    },

    {
      quote: "Brilliant thinking is rare, but courage is in even shorter supply than genius.",
      author: "Peter Thiel, Zero to One"
    },

    {
      quote: "All failed companies are the same: they failed to escape competition.",
      author: "Peter Thiel, Zero to One"
    },

    {
      quote: "Don't worry about failure; you only have to be right once.",
      author: "Drew Houston"
    },

    {
      quote: "As long as your going to be thinking anyway, think big.",
      author: "Donald Trump"
    },

    {
      quote: "Chase the vision, not the money; the money will end up following you.",
      author: "Tony Hsieh"
    },

    {
      quote: "Always deliver more than expected.",
      author: "Larry Page, Co-Founder, Google"
    },

    {
      quote: "If you’re not a risk taker, you should get the hell out of business.",
      author: "Ray Kroc, McDonald’s Founder"
    },

    {
      quote: "Ideas are commodity. Execution of them is not.",
      author: "Michael Dell, Dell Computers"
    },

  ];

  


  lifeQuotes = [

    {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss"
    },

    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },

    {
      quote: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde"
    },

    {
      quote: "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide"
    },

    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },

    {
      quote: "On most days, the biggest thing you can do is a small act of kindness, decency or love.",
      author: "Cory Booker"
    },

    {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },

    {
      quote: "We do not remember days, we remember moments.",
      author: "Cesare Pavese"
    },
    
    {
      quote: "Life's most persistent and urgent question is, 'What are you doing for others?'",
      author: "Martin Luther King, Jr."
    },

    {
      quote: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },

    {
      quote: "Beware the barrenness of a busy life.",
      author: "Socrates"
    },

    {
      quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
      author: "Winston Churchill"
    },

    {
      quote: "Growth is the only evidence of life.",
      author: "John Henry Newman"
    },

    {
      quote: "Sometimes the questions are complicated and the answers are simple.",
      author: "Dr. Seuss"
    },

    {
      quote: "Things change. And friends leave. Life doesn't stop for anybody.",
      author: "Stephen Chbosky"
    },

    {
      quote: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
      author: "Mark Twain"
    },

    {
      quote: "We are what we pretend to be, so we must be careful about what we pretend to be.",
      author: "Kurt Vonnegut"
    },

    {
      quote: "The one you love and the one who loves you are never, ever the same person.",
      author: "Chuck Palahniuk"
    },

    {
      quote: "If you don't know where you're going, any road'll take you there.",
      author: "George Harrison"
    },

    {
      quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
      author: "George Bernard Shaw"
    },

    {
      quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
      author: "Audrey Hepburn"
    },

    {
      quote: "Life is a book and there are a thousand pages I have not yet read.",
      author: "Cassandra Clare"
    },

    {
      quote: "Nobody realizes that some people expend tremendous energy merely to be normal",
      author: "Albert Camus"
    },

    {
      quote: "If you love somebody, let them go, for if they return, they were always yours. If they don't, they never were.",
      author: "Kahlil Gibran"
    },

    {
      quote: "Do I not destroy my enemies when I make them my friends?",
      author: "Abraham Lincoln"
    },


  ];

  relationshipQuotes = [

    {
      quote: "When you stop expecting people to be perfect, you can like them for who they are.",
      author: "Donald Miller"
    },

    {
      quote: "No road is long with good company.",
      author: "Turkish Proverb"
    },

    {
      quote: "Shared joy is a double joy; shared sorrow is half a sorrow.",
      author: "Swedish Proverb"
    },

    {
      quote: "We are afraid to care too much, for fear that the other person does not care at all.",
      author: "Eleanor Roosevelt"
    },

    {
      quote: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
      author: "Oprah Winfrey"
    },

    {
      quote: "What love we’ve given, we’ll have forever. What love we fail to give, will be lost for all eternity",
      author: "Leo Buscaglia"
    },

    {
      quote: "Life is partly what we make it, and partly what it is made by the friends we choose.",
      author: "Tennessee Williams"
    },

    {
      quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
      author: "Carl Jung"
    },

    {
      quote: "Intimacy is the capacity to be rather weird with someone – and finding that that’s ok with them.",
      author: "Alain de Botton"
    },

    {
      quote: "An eye for eye only ends up making the whole world blind.",
      author: "Mahatma Gandhi"
    },

    {
      quote: "What you do not want done to yourself, do not do to others.",
      author: "Confucius"
    },

    {
      quote: "Having someone wonder where you are when you don’t come home at night is a very old human need.",
      author: "Margaret Mead"
    },

    {
      quote: "I like to listen. I have learned a great deal from listening carefully. Most people never listen.",
      author: "Ernest Hemingway"
    },

    {
      quote: "Forgiveness does not change the past, but it does enlarge the future.",
      author: "Paul Boose"
    },

    {
      quote: "If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you.",
      author: "Winnie the Pooh"
    },

    {
      quote: "If you would be loved, love, and be loveable.",
      author: "Benjamin Franklin"
    },

    {
      quote: "People are lonely because they build walls instead of bridges.",
      author: "Joseph F. Newton"
    },

    {
      quote: "Assumptions are the termites of relationships.",
      author: "Henry Winkler"
    },

    {
      quote: "Love is when you meet someone who tells you something new about yourself.",
      author: "Andre Breton"
    },

    {
      quote: "A woman knows the face of the man she loves as a sailor knows the open sea.",
      author: "Honore de Balzac"
    },

    {
      quote: "When a woman is talking to you, listen to what she says with her eyes.",
      author: "Victor Hugo"
    },

    {
      quote: "We can improve our relationships with others by leaps and bounds if we become encouragers instead of critics.",
      author: "Joyce Meyer"
    },

    {
      quote: "Don’t smother each other. No one can grow in the shade.",
      author: "Leo Buscaglia"
    },

    {
      quote: "The royal road to a man’s heart is to talk to him about the things he treasures most.",
      author: "Dale Carnegie"
    },

    {
      quote: "When dealing with people, remember you are not dealing with creatures of logic, but creatures of emotion.",
      author: "Dale Carnegie"
    },


  ];

  movieQuotes = [

    {
      quote: "May the Force be with you",
      author: "Star Wars, 1977"
    },

    {
      quote: "There’s no place like home",
      author: "The Wizard of Oz, 1939"
    },

    {
      quote: "The first rule of Fight Club is you do not talk about Fight Club",
      author: "Fight Club, 1999"
    },

    {
      quote: "Keep your friends close, but your enemies closer.",
      author: "The Godfather Part II, 1974"
    },

    {
      quote: "They may take our lives, but they'll never take our freedom!",
      author: "Braveheart, 1995"
    },

    {
      quote: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
      author: "The Usual Suspects, 1995"
    },

    {
      quote: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
      author: "The Princess Bride, 1987"
    },

    {
      quote: "Get busy living, or get busy dying.",
      author: "The Shawshank Redemption, 1994"
    },

    {
      quote: "I'll be back.",
      author: "The Terminator, 1984"
    },

    {
      quote: "I'm also just a girl standing in front of a boy asking him to love her.",
      author: "Notting Hill, 1999"
    },

    {
      quote: "To call you stupid would be an insult to stupid people",
      author: "A Fish Called Wanda, 1988"
    },

    {
      quote: "Well, what if there is no tomorrow? There wasn't one today.",
      author: "Groundhog Day, 1993"
    },

    {
      quote: "You're not an asshole, Mark. You're just trying so hard to be.",
      author: "The Social Network, 2010"
    },

    {
      quote: "You're gonna need a bigger boat.",
      author: "Jaws, 1975"
    },

    {
      quote: "That’s what makes me sad: Life is so different from books.",
      author: "Pierrot Le Fou, 1965"
    },

    {
      quote: "Say what you like about the Nazis... they had style.",
      author: "Outpost, 2007"
    },

    {
      quote: "Old age. It's the only disease, Mr. Thompson, that you don't look forward to being cured of.",
      author: "Citizen Kane, 1941"
    },

    {
      quote: "Nobody's perfect.",
      author: "Some Like It Hot, 1959"
    },

    {
      quote: "Life is a box of chocolates, Forrest. You never know what you're gonna get.",
      author: "Forrest Gump, 1994"
    },

    {
      quote: "Louis, I think this is the beginning of a beautiful friendship.",
      author: "Casablanca, 1942"
    },

    {
      quote: "Man who catch fly with chopstick accomplish anything.",
      author: "The Karate Kid, 1984"
    },

    {
      quote: "In case I don't see ya, good afternoon, good evening, and good night!",
      author: "The Truman Show, 1998"
    },

    {
      quote: "I'll have what she's having.",
      author: "When Harry Met Sally, 1989"
    },

    {
      quote: "I'm gonna make him an offer he can't refuse.",
      author: "The Godfather, 1972"
    },

    {
      quote: "It’s a fool looks for logic in the chambers of the human heart.",
      author: "Where Art Thou?, 2000"
    },


  ];

  sportsQuotes = [

    {
      quote: "It’s hard to beat a person who never gives up.",
      author: "Babe Ruth, Baseball Legend" 
    },

    {
      quote: "If you even dream of beating me, you'd better wake up and apologize",
      author: "Muhammad Ali"
    },

    {
      quote: "If you only ever give 90% in training then you will only ever give 90% when it matters.",
      author: "Michael Owen"
    },

    {
      quote: "If you are afraid of failure you don’t deserve to be successful!",
      author: "Charles Barkley"
    },

    {
      quote: "The best motivation always comes from within.",
      author: "Michael Johnson"
    },

    {
      quote: "The more I practice, the luckier I get.",
      author: "Gary Player"
    },

    {
      quote: "One man practicing sportsmanship is far better than 50 preaching it.",
      author: "Knute Rockne"
    },

    {
      quote: "Winning is not everything – but making the effort to win is.",
      author: "Vince Lombardi"
    },

    {
      quote: "A good coach will make his players see what they can be rather than what they are.",
      author: "Ara Paraeghian"
    },

    {
      quote: "You miss 100 percent of the shots you don’t take",
      author: "Wayne Gretzky"
    },

    {
      quote: "Gold medals aren't really made of gold. They're made of sweat, determination and a hard-to-find alloy called guts",
      author: "Dan Gable"
    },

    {
      quote: "Everybody has a plan until they get punched in the face",
      author: "Mike Tyson"
    },

    {
      quote: "Most talented players don’t always succeed. Some don’t even make the team. It’s more what’s inside.",
      author: "Brett Favre"
    },

    {
      quote: "If you can’t outplay them, outwork them.",
      author: "Ben Hogan"
    },

    {
      quote: "You can't put a limit on anything. The more you dream, the farther you get.",
      author: "Michael Phelps"
    },

    {
      quote: "It is not the size of a man but the size of his heart that matters.",
      author: "Evander Holyfield"
    },

    {
      quote: "You have to believe in yourself when no one else does - that makes you a winner right there.",
      author: "Venus Williams"
    },

    {
      quote: "I skate to where the puck is going to be, not where it has been.",
      author: "Wayne Gretzy, Hockey Star"
    },

    {
      quote: "One man can be a crucial ingredient on a team, but one man cannot make a team.",
      author: "Kareem Abdul-Jabbar"
    },

    {
      quote: "The more difficult the victory, the greater the happiness in winning.",
      author: "Pele"
    },

    {
      quote: "Experience is a hard teacher because she gives the test first, the lesson afterward.",
      author: "Vernon Law"
    },

    {
      quote: "Today I will do what others won’t, so tomorrow I can accomplish what others can’t.",
      author: "Jerry Rice"
    },

    {
      quote: "I think it’s the mark of a great player to be confident in tough situations.",
      author: "John McEnroe"
    },

    {
      quote: "You’re never a loser until you quit trying.",
      author: "Mike Dikta"
    },

    {
      quote: "Sometimes the biggest problem is in your head. You’ve got to believe.",
      author: "Jack Nicklaus"
    },


  ];

  christianityQuotes = [

    {
      quote: "He is no fool who gives what he cannot keep, to gain what he cannot lose.",
      author: "Jim Elliot"
    },

    {
      quote: "With God all things are possible",
      author: "Mark 10:27, The Holy Bible"
    },

    {
      quote: "Worrying is arrogant because God knows what He's doing.",
      author: "Barbara Cameron"
    },

    {
      quote: "If you are too busy to pray, you are busier than God wants you to be.",
      author: "Wanda E. Brunstetter"
    },

    {
      quote: "As long as you do things for God, you are a Hall of Famer in Heaven's list.",
      author: "Rick Warren"
    },

    {
      quote: "I have never met the man I could despair of after discerning what lies in me apart from the grace of God.",
      author: "Oswald Chambers"
    },

    {
      quote: "Worry does not empty tomorrow of its sorrows; it empties today of its strength.",
      author: "Corrie Ten Boom"
    },

    {
      quote: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God",
      author: "Ephesians 2:8, The Holy Bible"
    },

    {
      quote: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
      author: "Romans 6:23, The Holy Bible"
    },

    {
      quote: "Worry is the darkroom in which negatives can develop.",
      author: "Wanda E. Brunstetter"
    },

    {
      quote: "True faith means holding nothing back. It means putting every hope in God's fidelity to His Promises.",
      author: "Francis Chan"
    },

    {
      quote: "If God called us to a task, He will then qualify us for the job.",
      author: "Jack Hyles"
    },

    {
      quote: "God loves each of us as if there were only one of us.",
      author: "Augustine"
    },

    {
      quote: "Outside of Christ, I am weak; in Christ, I am strong.",
      author: "Watchmen Nee"
    },

    {
      quote: "We have a God who delights in impossibilities.",
      author: "Billy Sunday"
    },

    {
      quote: "You are the only Bible some unbelievers will ever read.",
      author: "John MacArthur"
    },

    {
      quote: "Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.",
      author: "Francis Chan"
    },

    {
      quote: "Let God’s promises shine on your problems.",
      author: "Corrie Ten Boom"
    },

    {
      quote: "Faith is taking the first step even when you don’t see the whole staircase.",
      author: "Martin Luther King Jr"
    },

    {
      quote: "One act of obedience is better than one hundred sermons.",
      author: "Dietrich Bonhoeffer"
    },

    {
      quote: "Aim at heaven and you will get earth thrown in. Aim at earth and you get neither.",
      author: "C.S Lewis"
    },

    {
      quote: "He said “Love…as I have loved you.” We cannot love too much.",
      author: "Amy Carmichael"
    },

    {
      quote: "If God is your partner, make your plans BIG!",
      author: "D.L. Moody"
    },

    {
      quote: "I used to ask God to help me. Then I asked if I might help Him. I ended up by asking God to do His work through me.",
      author: "Hudson Taylor"
    },

    {
      quote: "Faith does not eliminate questions. But faith knows where to take them.",
      author: "Elisabeth Elliot"
    },

  ];

$(document).ready(function () {

  //Variables

  var x = startupQuotes;
  var i = 0;
  var m;
  var k;

  //Functions

  function firstQuote () {
    $(".quote").html(x[0].quote);
    $(".author").html("- " + x[0].author);
    i = 1;
  }

  function nextQuote () {
    $(".quote").html(x[i].quote);
    $(".author").html("- " + x[i].author);
  }

  function previousQuote () {
    $(".quote").html(x[m].quote);
    $(".author").html("- " + x[m].author);

  }

  function activeState () {
    $(".nav-bar-btn-span").removeClass('black-bottom-border');
    $("#nav-bar-btn-" + k).addClass('black-bottom-border');
  }

  //Navigation

  // $("#nav-bar-books, #home-books").click(function () {
  //   x = bookQuotes;
  //   k = "books";
  //   $("#page").attr('class', 'background-style-' + k);
  //   activeState();
  // });

  $("#nav-bar-relationships, #home-relationships").click(function () {
    x = relationshipQuotes;
    k = "relationships";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  // $("#nav-bar-african, #home-african").click(function () {
  //   x = africanQuotes;
  //   k = "african";
  //   $("#page").attr('class', 'background-style-' + k);
  //   activeState();
  // });

  $("#nav-bar-sports, #home-sports").click(function () {
    x = sportsQuotes;
    k = "sports";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  $("#nav-bar-movies, #home-movies").click(function () {
    x = movieQuotes;
    k = "movies";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  $("#nav-bar-life, #home-life").click(function () {
    x = lifeQuotes;
    k = "life";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  $("#nav-bar-christianity, #home-christianity").click(function () {
    x = christianityQuotes;
    k = "christianity";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  $("#nav-bar-startups, #home-startups").click(function () {
    x = startupQuotes;
    k = "startups";
    $("#page").attr('class', 'background-style-' + k);
    activeState();
  });

  $(".nav-bar-btn").click(function () {
    firstQuote();
  });

  $("#nav-bar-home").click(function () {
    $("#page").slideUp('slow');
    $(".home").slideDown('slow');
  });

  $(".title").click(function (){
    $("#page").slideDown('slow');
    $(".home").slideUp("slow");
    firstQuote();
  });


  //Buttons

  $("#next-quote").click(function() {
    nextQuote();
    i++;
    if (i >= x.length) {
      i = 0;
    }
  });

  $("#previous-quote").click(function () {  
    if (i <= 0) {
      i = x.length;
    }
    m = i - 2;
    if (m <= -1) {
      m = x.length - 1;
    }
    previousQuote();
    i--;
  });

  //Tweet Button
  
  $(".btn-tweet").click(function () {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = 'http://twitter.com/share?text=' + x[i-1].quote + " - " + x[i-1].author,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
      window.open(url, 'twitter', opts);
  });

});
