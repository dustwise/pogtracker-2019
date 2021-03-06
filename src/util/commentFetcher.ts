import { any } from "prop-types";

// accept a replayID
// detect returns data's next state
// compile all data gathered from a single replay
// strip emoticon-less comments

// generate emote averages
// generate emote average deviations
// collect timestamps for given deviations

// ?client_id=8qin2rf2zu84kut1uipw2f1uvgix3a

// 23 MIN STREAM - 377499328
// 3.5 HOUR STREAM - 415935655
// 6.5 HOUR STREAM - 416227494

const baseEmotes = [
  {
    code: "SingsNote",
    id: 300116350
  },
  {
    code: "SingsMic",
    id: 300116349
  },
  {
    code: "TwitchSings",
    id: 300116344
  },
  {
    code: "SoonerLater",
    id: 2113050
  },
  {
    code: "HolidayTree",
    id: 1713825
  },
  {
    code: "HolidaySanta",
    id: 1713822
  },
  {
    code: "HolidayPresent",
    id: 1713819
  },
  {
    code: "HolidayOrnament",
    id: 1713818
  },
  {
    code: "HolidayLog",
    id: 1713816
  },
  {
    code: "HolidayCookie",
    id: 1713813
  },
  {
    code: "GunRun",
    id: 1584743
  },
  {
    code: "PixelBob",
    id: 1547903
  },
  {
    code: "PeteZarollOdyssey",
    id: 1470037
  },
  {
    code: "PeteZaroll",
    id: 1470035
  },
  {
    code: "FBPenalty",
    id: 1441289
  },
  {
    code: "FBChallenge",
    id: 1441285
  },
  {
    code: "FBCatch",
    id: 1441281
  },
  {
    code: "FBBlock",
    id: 1441276
  },
  {
    code: "FBSpiral",
    id: 1441273
  },
  {
    code: "FBPass",
    id: 1441271
  },
  {
    code: "FBRun",
    id: 1441261
  },
  {
    code: "GenderFluidPride",
    id: 1297281
  },
  {
    code: "NonBinaryPride",
    id: 1297279
  },
  {
    code: "MaxLOL",
    id: 1290325
  },
  {
    code: "IntersexPride",
    id: 1221184
  },
  {
    code: "TwitchRPG",
    id: 1220086
  },
  {
    code: "PansexualPride",
    id: 1130349
  },
  {
    code: "AsexualPride",
    id: 1130348
  },
  {
    code: "TransgenderPride",
    id: 1064995
  },
  {
    code: "GayPride",
    id: 1064991
  },
  {
    code: "LesbianPride",
    id: 1064988
  },
  {
    code: "BisexualPride",
    id: 1064987
  },
  {
    code: "PinkMercy",
    id: 1003190
  },
  {
    code: "MercyWing2",
    id: 1003189
  },
  {
    code: "MercyWing1",
    id: 1003187
  },
  {
    code: "PartyHat",
    id: 965738
  },
  {
    code: "EarthDay",
    id: 959018
  },
  {
    code: "TombRaid",
    id: 864205
  },
  {
    code: "PopCorn",
    id: 724216
  },
  {
    code: "FBtouchdown",
    id: 626795
  },
  {
    code: "PurpleStar",
    id: 624501
  },
  {
    code: "AngryJack",
    id: 551866
  },
  {
    code: "HappyJack",
    id: 551865
  },
  {
    code: "GreenTeam",
    id: 530890
  },
  {
    code: "RedTeam",
    id: 530888
  },
  {
    code: "TPFufun",
    id: 508650
  },
  {
    code: "TwitchVotes",
    id: 479745
  },
  {
    code: "DarkMode",
    id: 461298
  },
  {
    code: "HSWP",
    id: 446979
  },
  {
    code: "HSCheers",
    id: 444572
  },
  {
    code: "PowerUpL",
    id: 425688
  },
  {
    code: "PowerUpR",
    id: 425671
  },
  {
    code: "LUL",
    id: 425618
  },
  {
    code: "EntropyWins",
    id: 376765
  },
  {
    code: "TPcrunchyroll",
    id: 323914
  },
  {
    code: "TwitchUnity",
    id: 196892
  },
  {
    code: "Squid4",
    id: 191767
  },
  {
    code: "Squid3",
    id: 191764
  },
  {
    code: "Squid2",
    id: 191763
  },
  {
    code: "Squid1",
    id: 191762
  },
  {
    code: "CrreamAwk",
    id: 191313
  },
  {
    code: "CarlSmile",
    id: 166266
  },
  {
    code: "TwitchLit",
    id: 166263
  },
  {
    code: "TehePelo",
    id: 160404
  },
  {
    code: "TearGlove",
    id: 160403
  },
  {
    code: "SabaPing",
    id: 160402
  },
  {
    code: "PunOko",
    id: 160401
  },
  {
    code: "KonCha",
    id: 160400
  },
  {
    code: "Kappu",
    id: 160397
  },
  {
    code: "InuyoFace",
    id: 160396
  },
  {
    code: "BigPhish",
    id: 160395
  },
  {
    code: "BegWan",
    id: 160394
  },
  {
    code: "ArigatoNas",
    id: 160393
  },
  {
    code: "ThankEgg",
    id: 160392
  },
  {
    code: "MorphinTime",
    id: 156787
  },
  {
    code: "BlessRNG",
    id: 153556
  },
  {
    code: "TheIlluminati",
    id: 145315
  },
  {
    code: "TBAngel",
    id: 143490
  },
  {
    code: "MVGame",
    id: 142140
  },
  {
    code: "NinjaGrumpy",
    id: 138325
  },
  {
    code: "PartyTime",
    id: 135393
  },
  {
    code: "RlyTho",
    id: 134256
  },
  {
    code: "UWot",
    id: 134255
  },
  {
    code: "YouDontSay",
    id: 134254
  },
  {
    code: "KAPOW",
    id: 133537
  },
  {
    code: "ItsBoshyTime",
    id: 133468
  },
  {
    code: "CoolStoryBob",
    id: 123171
  },
  {
    code: "TriHard",
    id: 120232
  },
  {
    code: "SuperVinlin",
    id: 118772
  },
  {
    code: "FreakinStinkin",
    id: 117701
  },
  {
    code: "Poooound",
    id: 117484
  },
  {
    code: "CurseLit",
    id: 116625
  },
  {
    code: "BatChest",
    id: 115234
  },
  {
    code: "BrainSlug",
    id: 115233
  },
  {
    code: "PrimeMe",
    id: 115075
  },
  {
    code: "StrawBeary",
    id: 114876
  },
  {
    code: "RaccAttack",
    id: 114870
  },
  {
    code: "UncleNox",
    id: 114856
  },
  {
    code: "WTRuck",
    id: 114847
  },
  {
    code: "TooSpicy",
    id: 114846
  },
  {
    code: "Jebaited",
    id: 114836
  },
  {
    code: "DogFace",
    id: 114835
  },
  {
    code: "BlargNaut",
    id: 114738
  },
  {
    code: "TakeNRG",
    id: 112292
  },
  {
    code: "GivePLZ",
    id: 112291
  },
  {
    code: "imGlitch",
    id: 112290
  },
  {
    code: "pastaThat",
    id: 112289
  },
  {
    code: "copyThis",
    id: 112288
  },
  {
    code: "UnSane",
    id: 111792
  },
  {
    code: "DatSheffy",
    id: 111700
  },
  {
    code: "TheTarFu",
    id: 111351
  },
  {
    code: "PicoMause",
    id: 111300
  },
  {
    code: "TinyFace",
    id: 111119
  },
  {
    code: "DrinkPurple",
    id: 110785
  },
  {
    code: "DxCat",
    id: 110734
  },
  {
    code: "RuleFive",
    id: 107030
  },
  {
    code: "VoteNay",
    id: 106294
  },
  {
    code: "VoteYea",
    id: 106293
  },
  {
    code: "PJSugar",
    id: 102556
  },
  {
    code: "DoritosChip",
    id: 102242
  },
  {
    code: "OpieOP",
    id: 100590
  },
  {
    code: "FutureMan",
    id: 98562
  },
  {
    code: "ChefFrank",
    id: 90129
  },
  {
    code: "StinkyCheese",
    id: 90076
  },
  {
    code: "NomNom",
    id: 90075
  },
  {
    code: "SmoocherZ",
    id: 89945
  },
  {
    code: "cmonBruh",
    id: 84608
  },
  {
    code: "KappaWealth",
    id: 81997
  },
  {
    code: "MikeHogu",
    id: 81636
  },
  {
    code: "VoHiYo",
    id: 81274
  },
  {
    code: "KomodoHype",
    id: 81273
  },
  {
    code: "SeriousSloth",
    id: 81249
  },
  {
    code: "OSFrog",
    id: 81248
  },
  {
    code: "OhMyDog",
    id: 81103
  },
  {
    code: "KappaClaus",
    id: 74510
  },
  {
    code: "KappaRoss",
    id: 70433
  },
  {
    code: "MingLee",
    id: 68856
  },
  {
    code: "SeemsGood",
    id: 64138
  },
  {
    code: "twitchRaid",
    id: 62836
  },
  {
    code: "bleedPurple",
    id: 62835
  },
  {
    code: "duDudu",
    id: 62834
  },
  {
    code: "riPepperonis",
    id: 62833
  },
  {
    code: "NotLikeThis",
    id: 58765
  },
  {
    code: "DendiFace",
    id: 58135
  },
  {
    code: "CoolCat",
    id: 58127
  },
  {
    code: "KappaPride",
    id: 55338
  },
  {
    code: "ShadyLulu",
    id: 52492
  },
  {
    code: "ArgieB8",
    id: 51838
  },
  {
    code: "CorgiDerp",
    id: 49106
  },
  {
    code: "HumbleLife",
    id: 46881
  },
  {
    code: "PraiseIt",
    id: 38586
  },
  {
    code: "TTours",
    id: 38436
  },
  {
    code: "mcaT",
    id: 35063
  },
  {
    code: "NotATK",
    id: 34875
  },
  {
    code: "HeyGuys",
    id: 30259
  },
  {
    code: "Mau5",
    id: 30134
  },
  {
    code: "PRChase",
    id: 28328
  },
  {
    code: "WutFace",
    id: 28087
  },
  {
    code: "BuddhaBar",
    id: 27602
  },
  {
    code: "PermaSmug",
    id: 27509
  },
  {
    code: "panicBasket",
    id: 22998
  },
  {
    code: "BabyRage",
    id: 22639
  },
  {
    code: "HassaanChop",
    id: 20225
  },
  {
    code: "TheThing",
    id: 7427
  },
  {
    code: "EleGiggle",
    id: 4339
  },
  {
    code: "RitzMitz",
    id: 4338
  },
  {
    code: "YouWHY",
    id: 4337
  },
  {
    code: "PipeHype",
    id: 4240
  },
  {
    code: "BrokeBack",
    id: 4057
  },
  {
    code: "ANELE",
    id: 3792
  },
  {
    code: "PanicVis",
    id: 3668
  },
  {
    code: "GrammarKing",
    id: 3632
  },
  {
    code: "PeoplesChamp",
    id: 3412
  },
  {
    code: "SoBayed",
    id: 1906
  },
  {
    code: "BigBrother",
    id: 1904
  },
  {
    code: "Keepo",
    id: 1902
  },
  {
    code: "Kippa",
    id: 1901
  },
  {
    code: "RalpherZ",
    id: 1900
  },
  {
    code: "TF2John",
    id: 1899
  },
  {
    code: "ThunBeast",
    id: 1898
  },
  {
    code: "WholeWheat",
    id: 1896
  },
  {
    code: "DAESuppy",
    id: 973
  },
  {
    code: "FailFish",
    id: 360
  },
  {
    code: "HotPokket",
    id: 357
  },
  {
    code: "4Head",
    id: 354
  },
  {
    code: "ResidentSleeper",
    id: 245
  },
  {
    code: "FUNgineer",
    id: 244
  },
  {
    code: "PMSTwin",
    id: 92
  },
  {
    code: "PogChamp",
    id: 88
  },
  {
    code: "ShazBotstix",
    id: 87
  },
  {
    code: "BibleThump",
    id: 86
  },
  {
    code: "AsianGlow",
    id: 74
  },
  {
    code: "DBstyle",
    id: 73
  },
  {
    code: "BloodTrail",
    id: 69
  },
  {
    code: "HassanChop",
    id: 68
  },
  {
    code: "OneHand",
    id: 66
  },
  {
    code: "FrankerZ",
    id: 65
  },
  {
    code: "SMOrc",
    id: 52
  },
  {
    code: "ArsonNoSexy",
    id: 50
  },
  {
    code: "PunchTrees",
    id: 47
  },
  {
    code: "SSSsss",
    id: 46
  },
  {
    code: "Kreygasm",
    id: 41
  },
  {
    code: "KevinTurtle",
    id: 40
  },
  {
    code: "PJSalt",
    id: 36
  },
  {
    code: "SwiftRage",
    id: 34
  },
  {
    code: "DansGame",
    id: 33
  },
  {
    code: "GingerPower",
    id: 32
  },
  {
    code: "BCWarrior",
    id: 30
  },
  {
    code: "MrDestructoid",
    id: 28
  },
  {
    code: "JonCarnage",
    id: 26
  },
  {
    code: "Kappa",
    id: 25
  },
  {
    code: "RedCoat",
    id: 22
  },
  {
    code: "TheRinger",
    id: 18
  },
  {
    code: "StoneLightning",
    id: 17
  },
  {
    code: "OptimizePrime",
    id: 16
  },
  {
    code: "JKanStyle",
    id: 15
  }
];

const REPLAY_OFFSET_LIMIT = 60;

const commentsToParse: any = [];

const filterCommentsWithEmoticons = (comments: any) => {
  return comments.filter(
    (comment: any) => comment.message.emoticons && comment.source === "chat"
  );
};

const fetchChunk = async (replayID: string, nextCursor: string) => {
  let fetchURL = `https://api.twitch.tv/v5/videos/${replayID}/comments?client_id=8qin2rf2zu84kut1uipw2f1uvgix3a`;

  if (nextCursor) {
    fetchURL = fetchURL + `&cursor=${nextCursor}`;
  }

  const response = await fetch(fetchURL);
  const json = await response.json();

  return json;
};

const commentFetcher = async (replayID: string) => {
  let hasNext = true;
  let nextCursor = "";

  while (hasNext) {
    const chunk = await fetchChunk(replayID, nextCursor);
    commentsToParse.push(...filterCommentsWithEmoticons(chunk.comments));

    chunk._next ? (nextCursor = chunk._next) : (hasNext = false);
  }

  const minutes = chunkSplitter(commentsToParse);
  const mostPopularPerMinute = getMostPopularPerMinute(minutes);

  mostPopularPerMinute.forEach((winner: string, index: number) => {
    if(winner === '88'){
      console.log(index);
    }
  });
};

const chunkSplitter = (comments: any) => {
  const minuteChunks: any = [[]];
  let currentReachedOffsetLimit = 0;

  comments.forEach((comment: any) => {
    const nextLimit = currentReachedOffsetLimit + REPLAY_OFFSET_LIMIT;

    if (comment.content_offset_seconds >= nextLimit) {
      minuteChunks.push([]);
      currentReachedOffsetLimit = nextLimit;
    }

    minuteChunks[minuteChunks.length - 1].push(comment);
  });

  return minuteChunks;
};

const getMostPopularPerMinute = (minutes: any) => {
  return minutes.map((minute: any) => {
    const detectedEmotes: any = {};
    let currentBest = 0;
    let mostPopularEmoticon = "";

    minute.forEach((comment: any) => {
      comment.message.emoticons.forEach((emoticon: any) => {
        if (!detectedEmotes[emoticon]) {
          detectedEmotes[emoticon] = 0;
        }

        detectedEmotes[emoticon] = detectedEmotes[emoticon] + 1;

        if (detectedEmotes[emoticon] > currentBest) {
          currentBest = detectedEmotes[emoticon];
          mostPopularEmoticon = emoticon._id;
        }
      });
    });

    return mostPopularEmoticon;
  });
};

export default commentFetcher;
