let currentIndex = 0;
const data = [
    // ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1'],
    // ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'L2'],
    ["I eat", "I am eating", "I have eaten", "I have been eating", "I ate", "I was eating", "I had eaten", "I had been eating", "I will eat", "I will be eating", "I will have eaten", "I will have been eating"],
    ["I run", "I am running", "I have run", "I have been running", "I ran", "I was running", "I had run", "I had been running", "I will run", "I will be running", "I will have run", "I will have been running"],
    ["I read", "I am reading", "I have read", "I have been reading", "I read (past tense)", "I was reading", "I had read", "I had been reading", "I will read", "I will be reading", "I will have read", "I will have been reading"],
    ["I play", "I am playing", "I have played", "I have been playing", "I played", "I was playing", "I had played", "I had been playing", "I will play", "I will be playing", "I will have played", "I will have been playing"],
    ["I sing", "I am singing", "I have sung", "I have been singing", "I sang", "I was singing", "I had sung", "I had been singing", "I will sing", "I will be singing", "I will have sung", "I will have been singing"],
    ["I dance", "I am dancing", "I have danced", "I have been dancing", "I danced", "I was dancing", "I had danced", "I had been dancing", "I will dance", "I will be dancing", "I will have danced", "I will have been dancing"],
    ["I speak", "I am speaking", "I have spoken", "I have been speaking", "I spoke", "I was speaking", "I had spoken", "I had been speaking", "I will speak", "I will be speaking", "I will have spoken", "I will have been speaking"],
    ["I think", "I am thinking", "I have thought", "I have been thinking", "I thought", "I was thinking", "I had thought", "I had been thinking", "I will think", "I will be thinking", "I will have thought", "I will have been thinking"],
    ["I study", "I am studying", "I have studied", "I have been studying", "I studied", "I was studying", "I had studied", "I had been studying", "I will study", "I will be studying", "I will have studied", "I will have been studying"],

    ["I laugh", "I am laughing", "I have laughed", "I have been laughing", "I laughed", "I was laughing", "I had laughed", "I had been laughing", "I will laugh", "I will be laughing", "I will have laughed", "I will have been laughing"],
    ["I sleep", "I am sleeping", "I have slept", "I have been sleeping", "I slept", "I was sleeping", "I had slept", "I had been sleeping", "I will sleep", "I will be sleeping", "I will have slept", "I will have been sleeping"],
    ["I walk", "I am walking", "I have walked", "I have been walking", "I walked", "I was walking", "I had walked", "I had been walking", "I will walk", "I will be walking", "I will have walked", "I will have been walking"],
    ["I dream", "I am dreaming", "I have dreamed", "I have been dreaming", "I dreamed", "I was dreaming", "I had dreamed", "I had been dreaming", "I will dream", "I will be dreaming", "I will have dreamed", "I will have been dreaming"],
    ["I cook", "I am cooking", "I have cooked", "I have been cooking", "I cooked", "I was cooking", "I had cooked", "I had been cooking", "I will cook", "I will be cooking", "I will have cooked", "I will have been cooking"],
    ["I manage", "I am managing", "I have managed", "I have been managing", "I managed", "I was managing", "I had managed", "I had been managing", "I will manage", "I will be managing", "I will have managed", "I will have been managing"],
    ["I organize", "I am organizing", "I have organized", "I have been organizing", "I organized", "I was organizing", "I had organized", "I had been organizing", "I will organize", "I will be organizing", "I will have organized", "I will have been organizing"],
    ["I negotiate", "I am negotiating", "I have negotiated", "I have been negotiating", "I negotiated", "I was negotiating", "I had negotiated", "I had been negotiating", "I will negotiate", "I will be negotiating", "I will have negotiated", "I will have been negotiating"],
    ["I analyze", "I am analyzing", "I have analyzed", "I have been analyzing", "I analyzed", "I was analyzing", "I had analyzed", "I had been analyzing", "I will analyze", "I will be analyzing", "I will have analyzed", "I will have been analyzing"],
    ["I implement", "I am implementing", "I have implemented", "I have been implementing", "I implemented", "I was implementing", "I had implemented", "I had been implementing", "I will implement", "I will be implementing", "I will have implemented", "I will have been implementing"],
    ["I go", "I am going", "I have gone", "I have been going", "I went", "I was going", "I had gone", "I had been going", "I will go", "I will be going", "I will have gone", "I will have been going"],
    ["I come", "I am coming", "I have come", "I have been coming", "I came", "I was coming", "I had come", "I had been coming", "I will come", "I will be coming", "I will have come", "I will have been coming"],
    ["I see", "I am seeing", "I have seen", "I have been seeing", "I saw", "I was seeing", "I had seen", "I had been seeing", "I will see", "I will be seeing", "I will have seen", "I will have been seeing"],
    ["I know", "I am knowing", "I have known", "I have been knowing", "I knew", "I was knowing", "I had known", "I had been knowing", "I will know", "I will be knowing", "I will have known", "I will have been knowing"],
    ["I find", "I am finding", "I have found", "I have been finding", "I found", "I was finding", "I had found", "I had been finding", "I will find", "I will be finding", "I will have found", "I will have been finding"],


    ["I throw", "I am throwing", "I have thrown", "I have been throwing", "I threw", "I was throwing", "I had thrown", "I had been throwing", "I will throw", "I will be throwing", "I will have thrown", "I will have been throwing"],
    ["I fly", "I am flying", "I have flown", "I have been flying", "I flew", "I was flying", "I had flown", "I had been flying", "I will fly", "I will be flying", "I will have flown", "I will have been flying"],

["I choose", "I am choosing", "I have chosen", "I have been choosing", "I chose", "I was choosing", "I had chosen", "I had been choosing", "I will choose", "I will be choosing", "I will have chosen", "I will have been choosing"],

["I grow", "I am growing", "I have grown", "I have been growing", "I grew", "I was growing", "I had grown", "I had been growing", "I will grow", "I will be growing", "I will have grown", "I will have been growing"],


["I break", "I am breaking", "I have broken", "I have been breaking", "I broke", "I was breaking", "I had broken", "I had been breaking", "I will break", "I will be breaking", "I will have broken", "I will have been breaking"],



["I bite", "I am biting", "I have bitten", "I have been biting", "I bit", "I was biting", "I had bitten", "I had been biting", "I will bite", "I will be biting", "I will have bitten", "I will have been biting"],
["I hide", "I am hiding", "I have hidden", "I have been hiding", "I hid", "I was hiding", "I had hidden", "I had been hiding", "I will hide", "I will be hiding", "I will have hidden", "I will have been hiding"],
["I shake", "I am shaking", "I have shaken", "I have been shaking", "I shook", "I was shaking", "I had shaken", "I had been shaking", "I will shake", "I will be shaking", "I will have shaken", "I will have been shaking"],
["I steal", "I am stealing", "I have stolen", "I have been stealing", "I stole", "I was stealing", "I had stolen", "I had been stealing", "I will steal", "I will be stealing", "I will have stolen", "I will have been stealing"],
["I swing", "I am swinging", "I have swung", "I have been swinging", "I swung", "I was swinging", "I had swung", "I had been swinging", "I will swing", "I will be swinging", "I will have swung", "I will have been swinging"],

["I sell", "I am selling", "I have sold", "I have been selling", "I sold", "I was selling", "I had sold", "I had been selling", "I will sell", "I will be selling", "I will have sold", "I will have been selling"],
["I negotiate", "I am negotiating", "I have negotiated", "I have been negotiating", "I negotiated", "I was negotiating", "I had negotiated", "I had been negotiating", "I will negotiate", "I will be negotiating", "I will have negotiated", "I will have been negotiating"],
["I persuade", "I am persuading", "I have persuaded", "I have been persuading", "I persuaded", "I was persuading", "I had persuaded", "I had been persuading", "I will persuade", "I will be persuading", "I will have persuaded", "I will have been persuading"],
["I promote", "I am promoting", "I have promoted", "I have been promoting", "I promoted", "I was promoting", "I had promoted", "I had been promoting", "I will promote", "I will be promoting", "I will have promoted", "I will have been promoting"],
["I advertise", "I am advertising", "I have advertised", "I have been advertising", "I advertised", "I was advertising", "I had advertised", "I had been advertising", "I will advertise", "I will be advertising", "I will have advertised", "I will have been advertising"],

["I teach", "I am teaching", "I have taught", "I have been teaching", "I taught", "I was teaching", "I had taught", "I had been teaching", "I will teach", "I will be teaching", "I will have taught", "I will have been teaching"],
["I nurture", "I am nurturing", "I have nurtured", "I have been nurturing", "I nurtured", "I was nurturing", "I had nurtured", "I had been nurturing", "I will nurture", "I will be nurturing", "I will have nurtured", "I will have been nurturing"],
["I discipline", "I am disciplining", "I have disciplined", "I have been disciplining", "I disciplined", "I was disciplining", "I had disciplined", "I had been disciplining", "I will discipline", "I will be disciplining", "I will have disciplined", "I will have been disciplining"],
["I protect", "I am protecting", "I have protected", "I have been protecting", "I protected", "I was protecting", "I had protected", "I had been protecting", "I will protect", "I will be protecting", "I will have protected", "I will have been protecting"],
["I comfort", "I am comforting", "I have comforted", "I have been comforting", "I comforted", "I was comforting", "I had comforted", "I had been comforting", "I will comfort", "I will be comforting", "I will have comforted", "I will have been comforting"],


["I bargain", "I am bargaining", "I have bargained", "I have been bargaining", "I bargained", "I was bargaining", "I had bargained", "I had been bargaining", "I will bargain", "I will be bargaining", "I will have bargained", "I will have been bargaining"],
["I discuss", "I am discussing", "I have discussed", "I have been discussing", "I discussed", "I was discussing", "I had discussed", "I had been discussing", "I will discuss", "I will be discussing", "I will have discussed", "I will have been discussing"],
["I propose", "I am proposing", "I have proposed", "I have been proposing", "I proposed", "I was proposing", "I had proposed", "I had been proposing", "I will propose", "I will be proposing", "I will have proposed", "I will have been proposing"],
["I compromise", "I am compromising", "I have compromised", "I have been compromising", "I compromised", "I was compromising", "I had compromised", "I had been compromising", "I will compromise", "I will be compromising", "I will have compromised", "I will have been compromising"],
["I concede", "I am conceding", "I have conceded", "I have been conceding", "I conceded", "I was conceding", "I had conceded", "I had been conceding", "I will concede", "I will be conceding", "I will have conceded", "I will have been conceding"],


["I persuade", "I am persuading", "I have persuaded", "I have been persuading", "I persuaded", "I was persuading", "I had persuaded", "I had been persuading", "I will persuade", "I will be persuading", "I will have persuaded", "I will have been persuading"],
["I influence", "I am influencing", "I have influenced", "I have been influencing", "I influenced", "I was influencing", "I had influenced", "I had been influencing", "I will influence", "I will be influencing", "I will have influenced", "I will have been influencing"],
["I mediate", "I am mediating", "I have mediated", "I have been mediating", "I mediated", "I was mediating", "I had mediated", "I had been mediating", "I will mediate", "I will be mediating", "I will have mediated", "I will have been mediating"],
["I arbitrate", "I am arbitrating", "I have arbitrated", "I have been arbitrating", "I arbitrated", "I was arbitrating", "I had arbitrated", "I had been arbitrating", "I will arbitrate", "I will be arbitrating", "I will have arbitrated", "I will have been arbitrating"],
["I consult", "I am consulting", "I have consulted", "I have been consulting", "I consulted", "I was consulting", "I had consulted", "I had been consulting", "I will consult", "I will be consulting", "I will have consulted", "I will have been consulting"],


["I present", "I am presenting", "I have presented", "I have been presenting", "I presented", "I was presenting", "I had presented", "I had been presenting", "I will present", "I will be presenting", "I will have presented", "I will have been presenting"],
["I explain", "I am explaining", "I have explained", "I have been explaining", "I explained", "I was explaining", "I had explained", "I had been explaining", "I will explain", "I will be explaining", "I will have explained", "I will have been explaining"],
["I demonstrate", "I am demonstrating", "I have demonstrated", "I have been demonstrating", "I demonstrated", "I was demonstrating", "I had demonstrated", "I had been demonstrating", "I will demonstrate", "I will be demonstrating", "I will have demonstrated", "I will have been demonstrating"],
["I illustrate", "I am illustrating", "I have illustrated", "I have been illustrating", "I illustrated", "I was illustrating", "I had illustrated", "I had been illustrating", "I will illustrate", "I will be illustrating", "I will have illustrated", "I will have been illustrating"],
["I describe", "I am describing", "I have described", "I have been describing", "I described", "I was describing", "I had described", "I had been describing", "I will describe", "I will be describing", "I will have described", "I will have been describing"],


["I cook", "I am cooking", "I have cooked", "I have been cooking", "I cooked", "I was cooking", "I had cooked", "I had been cooking", "I will cook", "I will be cooking", "I will have cooked", "I will have been cooking"],
["I bake", "I am baking", "I have baked", "I have been baking", "I baked", "I was baking", "I had baked", "I had been baking", "I will bake", "I will be baking", "I will have baked", "I will have been baking"],
["I fry", "I am frying", "I have fried", "I have been frying", "I fried", "I was frying", "I had fried", "I had been frying", "I will fry", "I will be frying", "I will have fried", "I will have been frying"],
["I grill", "I am grilling", "I have grilled", "I have been grilling", "I grilled", "I was grilling", "I had grilled", "I had been grilling", "I will grill", "I will be grilling", "I will have grilled", "I will have been grilling"],
["I boil", "I am boiling", "I have boiled", "I have been boiling", "I boiled", "I was boiling", "I had boiled", "I had been boiling", "I will boil", "I will be boiling", "I will have boiled", "I will have been boiling"],


["I travel", "I am traveling", "I have traveled", "I have been traveling", "I traveled", "I was traveling", "I had traveled", "I had been traveling", "I will travel", "I will be traveling", "I will have traveled", "I will have been traveling"],
["I explore", "I am exploring", "I have explored", "I have been exploring", "I explored", "I was exploring", "I had explored", "I had been exploring", "I will explore", "I will be exploring", "I will have explored", "I will have been exploring"],
["I visit", "I am visiting", "I have visited", "I have been visiting", "I visited", "I was visiting", "I had visited", "I had been visiting", "I will visit", "I will be visiting", "I will have visited", "I will have been visiting"],
["I hike", "I am hiking", "I have hiked", "I have been hiking", "I hiked", "I was hiking", "I had hiked", "I had been hiking", "I will hike", "I will be hiking", "I will have hiked", "I will have been hiking"],
["I navigate", "I am navigating", "I have navigated", "I have been navigating", "I navigated", "I was navigating", "I had navigated", "I had been navigating", "I will navigate", "I will be navigating", "I will have navigated", "I will have been navigating"],


["I drive", "I am driving", "I have driven", "I have been driving", "I drove", "I was driving", "I had driven", "I had been driving", "I will drive", "I will be driving", "I will have driven", "I will have been driving"],
["I accelerate", "I am accelerating", "I have accelerated", "I have been accelerating", "I accelerated", "I was accelerating", "I had accelerated", "I had been accelerating", "I will accelerate", "I will be accelerating", "I will have accelerated", "I will have been accelerating"],
["I brake", "I am braking", "I have braked", "I have been braking", "I braked", "I was braking", "I had braked", "I had been braking", "I will brake", "I will be braking", "I will have braked", "I will have been braking"],
["I park", "I am parking", "I have parked", "I have been parking", "I parked", "I was parking", "I had parked", "I had been parking", "I will park", "I will be parking", "I will have parked", "I will have been parking"],
["I navigate", "I am navigating", "I have navigated", "I have been navigating", "I navigated", "I was navigating", "I had navigated", "I had been navigating", "I will navigate", "I will be navigating", "I will have navigated", "I will have been navigating"],

["I celebrate", "I am celebrating", "I have celebrated", "I have been celebrating", "I celebrated", "I was celebrating", "I had celebrated", "I had been celebrating", "I will celebrate", "I will be celebrating", "I will have celebrated", "I will have been celebrating"],
["I party", "I am partying", "I have partied", "I have been partying", "I partied", "I was partying", "I had partied", "I had been partying", "I will party", "I will be partying", "I will have partied", "I will have been partying"],
["I toast", "I am toasting", "I have toasted", "I have been toasting", "I toasted", "I was toasting", "I had toasted", "I had been toasting", "I will toast", "I will be toasting", "I will have toasted", "I will have been toasting"],
["I dance", "I am dancing", "I have danced", "I have been dancing", "I danced", "I was dancing", "I had danced", "I had been dancing", "I will dance", "I will be dancing", "I will have danced", "I will have been dancing"],
["I sing", "I am singing", "I have sung", "I have been singing", "I sang", "I was singing", "I had sung", "I had been singing", "I will sing", "I will be singing", "I will have sung", "I will have been singing"],

["I celebrate", "I am celebrating", "I have celebrated", "I have been celebrating", "I celebrated", "I was celebrating", "I had celebrated", "I had been celebrating", "I will celebrate", "I will be celebrating", "I will have celebrated", "I will have been celebrating"],
["I party", "I am partying", "I have partied", "I have been partying", "I partied", "I was partying", "I had partied", "I had been partying", "I will party", "I will be partying", "I will have partied", "I will have been partying"],
["I toast", "I am toasting", "I have toasted", "I have been toasting", "I toasted", "I was toasting", "I had toasted", "I had been toasting", "I will toast", "I will be toasting", "I will have toasted", "I will have been toasting"],
["I dance", "I am dancing", "I have danced", "I have been dancing", "I danced", "I was dancing", "I had danced", "I had been dancing", "I will dance", "I will be dancing", "I will have danced", "I will have been dancing"],
["I sing", "I am singing", "I have sung", "I have been singing", "I sang", "I was singing", "I had sung", "I had been singing", "I will sing", "I will be singing", "I will have sung", "I will have been singing"],


["I create", "I am creating", "I have created", "I have been creating", "I created", "I was creating", "I had created", "I had been creating", "I will create", "I will be creating", "I will have created", "I will have been creating"],
["I design", "I am designing", "I have designed", "I have been designing", "I designed", "I was designing", "I had designed", "I had been designing", "I will design", "I will be designing", "I will have designed", "I will have been designing"],
["I build", "I am building", "I have built", "I have been building", "I built", "I was building", "I had built", "I had been building", "I will build", "I will be building", "I will have built", "I will have been building"],
["I invent", "I am inventing", "I have invented", "I have been inventing", "I invented", "I was inventing", "I had invented", "I had been inventing", "I will invent", "I will be inventing", "I will have invented", "I will have been inventing"],
["I craft", "I am crafting", "I have crafted", "I have been crafting", "I crafted", "I was crafting", "I had crafted", "I had been crafting", "I will craft", "I will be crafting", "I will have crafted", "I will have been crafting"],


["I edit", "I am editing", "I have edited", "I have been editing", "I edited", "I was editing", "I had edited", "I had been editing", "I will edit", "I will be editing", "I will have edited", "I will have been editing"],
["I revise", "I am revising", "I have revised", "I have been revising", "I revised", "I was revising", "I had revised", "I had been revising", "I will revise", "I will be revising", "I will have revised", "I will have been revising"],
["I correct", "I am correcting", "I have corrected", "I have been correcting", "I corrected", "I was correcting", "I had corrected", "I had been correcting", "I will correct", "I will be correcting", "I will have corrected", "I will have been correcting"],
["I modify", "I am modifying", "I have modified", "I have been modifying", "I modified", "I was modifying", "I had modified", "I had been modifying", "I will modify", "I will be modifying", "I will have modified", "I will have been modifying"],
["I proofread", "I am proofreading", "I have proofread", "I have been proofreading", "I proofread", "I was proofreading", "I had proofread", "I had been proofreading", "I will proofread", "I will be proofreading", "I will have proofread", "I will have been proofreading"],


["I entertain", "I am entertaining", "I have entertained", "I have been entertaining", "I entertained", "I was entertaining", "I had entertained", "I had been entertaining", "I will entertain", "I will be entertaining", "I will have entertained", "I will have been entertaining"],
["I perform", "I am performing", "I have performed", "I have been performing", "I performed", "I was performing", "I had performed", "I had been performing", "I will perform", "I will be performing", "I will have performed", "I will have been performing"],
["I act", "I am acting", "I have acted", "I have been acting", "I acted", "I was acting", "I had acted", "I had been acting", "I will act", "I will be acting", "I will have acted", "I will have been acting"],
["I direct", "I am directing", "I have directed", "I have been directing", "I directed", "I was directing", "I had directed", "I had been directing", "I will direct", "I will be directing", "I will have directed", "I will have been directing"],
["I produce", "I am producing", "I have produced", "I have been producing", "I produced", "I was producing", "I had produced", "I had been producing", "I will produce", "I will be producing", "I will have produced", "I will have been producing"],





["I wear", "I am wearing", "I have worn", "I have been wearing", "I wore", "I was wearing", "I had worn", "I had been wearing", "I will wear", "I will be wearing", "I will have worn", "I will have been wearing"],
["I dress", "I am dressing", "I have dressed", "I have been dressing", "I dressed", "I was dressing", "I had dressed", "I had been dressing", "I will dress", "I will be dressing", "I will have dressed", "I will have been dressing"],
["I tailor", "I am tailoring", "I have tailored", "I have been tailoring", "I tailored", "I was tailoring", "I had tailored", "I had been tailoring", "I will tailor", "I will be tailoring", "I will have tailored", "I will have been tailoring"],
["I design", "I am designing", "I have designed", "I have been designing", "I designed", "I was designing", "I had designed", "I had been designing", "I will design", "I will be designing", "I will have designed", "I will have been designing"],
["I stitch", "I am stitching", "I have stitched", "I have been stitching", "I stitched", "I was stitching", "I had stitched", "I had been stitching", "I will stitch", "I will be stitching", "I will have stitched", "I will have been stitching"],


["I generate", "I am generating", "I have generated", "I have been generating", "I generated", "I was generating", "I had generated", "I had been generating", "I will generate", "I will be generating", "I will have generated", "I will have been generating"],
["I consume", "I am consuming", "I have consumed", "I have been consuming", "I consumed", "I was consuming", "I had consumed", "I had been consuming", "I will consume", "I will be consuming", "I will have consumed", "I will have been consuming"],
["I store", "I am storing", "I have stored", "I have been storing", "I stored", "I was storing", "I had stored", "I had been storing", "I will store", "I will be storing", "I will have stored", "I will have been storing"],
["I distribute", "I am distributing", "I have distributed", "I have been distributing", "I distributed", "I was distributing", "I had distributed", "I had been distributing", "I will distribute", "I will be distributing", "I will have distributed", "I will have been distributing"],
["I harness", "I am harnessing", "I have harnessed", "I have been harnessing", "I harnessed", "I was harnessing", "I had harnessed", "I had been harnessing", "I will harness", "I will be harnessing", "I will have harnessed", "I will have been harnessing"],





["I think", "I am thinking", "I have thought", "I have been thinking", "I thought", "I was thinking", "I had thought", "I had been thinking", "I will think", "I will be thinking", "I will have thought", "I will have been thinking"],
["I consider", "I am considering", "I have considered", "I have been considering", "I considered", "I was considering", "I had considered", "I had been considering", "I will consider", "I will be considering", "I will have considered", "I will have been considering"],
["I analyze", "I am analyzing", "I have analyzed", "I have been analyzing", "I analyzed", "I was analyzing", "I had analyzed", "I had been analyzing", "I will analyze", "I will be analyzing", "I will have analyzed", "I will have been analyzing"],
["I reflect", "I am reflecting", "I have reflected", "I have been reflecting", "I reflected", "I was reflecting", "I had reflected", "I had been reflecting", "I will reflect", "I will be reflecting", "I will have reflected", "I will have been reflecting"],
["I contemplate", "I am contemplating", "I have contemplated", "I have been contemplating", "I contemplated", "I was contemplating", "I had contemplated", "I had been contemplating", "I will contemplate", "I will be contemplating", "I will have contemplated", "I will have been contemplating"],


["I wash", "I am washing", "I have washed", "I have been washing", "I washed", "I was washing", "I had washed", "I had been washing", "I will wash", "I will be washing", "I will have washed", "I will have been washing"],
["I rinse", "I am rinsing", "I have rinsed", "I have been rinsing", "I rinsed", "I was rinsing", "I had rinsed", "I had been rinsing", "I will rinse", "I will be rinsing", "I will have rinsed", "I will have been rinsing"],
["I scrub", "I am scrubbing", "I have scrubbed", "I have been scrubbing", "I scrubbed", "I was scrubbing", "I had scrubbed", "I had been scrubbing", "I will scrub", "I will be scrubbing", "I will have scrubbed", "I will have been scrubbing"],
["I soak", "I am soaking", "I have soaked", "I have been soaking", "I soaked", "I was soaking", "I had soaked", "I had been soaking", "I will soak", "I will be soaking", "I will have soaked", "I will have been soaking"],
["I polish", "I am polishing", "I have polished", "I have been polishing", "I polished", "I was polishing", "I had polished", "I had been polishing", "I will polish", "I will be polishing", "I will have polished", "I will have been polishing"],





["I look", "I am looking", "I have looked", "I have been looking", "I looked", "I was looking", "I had looked", "I had been looking", "I will look", "I will be looking", "I will have looked", "I will have been looking"],
["I observe", "I am observing", "I have observed", "I have been observing", "I observed", "I was observing", "I had observed", "I had been observing", "I will observe", "I will be observing", "I will have observed", "I will have been observing"],
["I watch", "I am watching", "I have watched", "I have been watching", "I watched", "I was watching", "I had watched", "I had been watching", "I will watch", "I will be watching", "I will have watched", "I will have been watching"],
["I examine", "I am examining", "I have examined", "I have been examining", "I examined", "I was examining", "I had examined", "I had been examining", "I will examine", "I will be examining", "I will have examined", "I will have been examining"],
["I scan", "I am scanning", "I have scanned", "I have been scanning", "I scanned", "I was scanning", "I had scanned", "I had been scanning", "I will scan", "I will be scanning", "I will have scanned", "I will have been scanning"],


["I flow", "I am flowing", "I have flowed", "I have been flowing", "I flowed", "I was flowing", "I had flowed", "I had been flowing", "I will flow", "I will be flowing", "I will have flowed", "I will have been flowing"],
["I drip", "I am dripping", "I have dripped", "I have been dripping", "I dripped", "I was dripping", "I had dripped", "I had been dripping", "I will drip", "I will be dripping", "I will have dripped", "I will have been dripping"],
["I splash", "I am splashing", "I have splashed", "I have been splashing", "I splashed", "I was splashing", "I had splashed", "I had been splashing", "I will splash", "I will be splashing", "I will have splashed", "I will have been splashing"],
["I soak", "I am soaking", "I have soaked", "I have been soaking", "I soaked", "I was soaking", "I had soaked", "I had been soaking", "I will soak", "I will be soaking", "I will have soaked", "I will have been soaking"],
["I swim", "I am swimming", "I have swum", "I have been swimming", "I swam", "I was swimming", "I had swum", "I had been swimming", "I will swim", "I will be swimming", "I will have swum", "I will have been swimming"],



["I wait", "I am waiting", "I have waited", "I have been waiting", "I waited", "I was waiting", "I had waited", "I had been waiting", "I will wait", "I will be waiting", "I will have waited", "I will have been waiting"],
["I delay", "I am delaying", "I have delayed", "I have been delaying", "I delayed", "I was delaying", "I had delayed", "I had been delaying", "I will delay", "I will be delaying", "I will have delayed", "I will have been delaying"],
["I schedule", "I am scheduling", "I have scheduled", "I have been scheduling", "I scheduled", "I was scheduling", "I had scheduled", "I had been scheduling", "I will schedule", "I will be scheduling", "I will have scheduled", "I will have been scheduling"],
["I hasten", "I am hastening", "I have hastened", "I have been hastening", "I hastened", "I was hastening", "I had hastened", "I had been hastening", "I will hasten", "I will be hastening", "I will have hastened", "I will have been hastening"],
["I postpone", "I am postponing", "I have postponed", "I have been postponing", "I postponed", "I was postponing", "I had postponed", "I had been postponing", "I will postpone", "I will be postponing", "I will have postponed", "I will have been postponing"],


["I carry", "I am carrying", "I have carried", "I have been carrying", "I carried", "I was carrying", "I had carried", "I had been carrying", "I will carry", "I will be carrying", "I will have carried", "I will have been carrying"],
["I lift", "I am lifting", "I have lifted", "I have been lifting", "I lifted", "I was lifting", "I had lifted", "I had been lifting", "I will lift", "I will be lifting", "I will have lifted", "I will have been lifting"],
["I haul", "I am hauling", "I have hauled", "I have been hauling", "I hauled", "I was hauling", "I had hauled", "I had been hauling", "I will haul", "I will be hauling", "I will have hauled", "I will have been hauling"],
["I transport", "I am transporting", "I have transported", "I have been transporting", "I transported", "I was transporting", "I had transported", "I had been transporting", "I will transport", "I will be transporting", "I will have transported", "I will have been transporting"],
["I drag", "I am dragging", "I have dragged", "I have been dragging", "I dragged", "I was dragging", "I had dragged", "I had been dragging", "I will drag", "I will be dragging", "I will have dragged", "I will have been dragging"],



["I compute", "I am computing", "I have computed", "I have been computing", "I computed", "I was computing", "I had computed", "I had been computing", "I will compute", "I will be computing", "I will have computed", "I will have been computing"],
["I program", "I am programming", "I have programmed", "I have been programming", "I programmed", "I was programming", "I had programmed", "I had been programming", "I will program", "I will be programming", "I will have programmed", "I will have been programming"],
["I code", "I am coding", "I have coded", "I have been coding", "I coded", "I was coding", "I had coded", "I had been coding", "I will code", "I will be coding", "I will have coded", "I will have been coding"],
["I debug", "I am debugging", "I have debugged", "I have been debugging", "I debugged", "I was debugging", "I had debugged", "I had been debugging", "I will debug", "I will be debugging", "I will have debugged", "I will have been debugging"],
["I install", "I am installing", "I have installed", "I have been installing", "I installed", "I was installing", "I had installed", "I had been installing", "I will install", "I will be installing", "I will have installed", "I will have been installing"],



["I diagnose", "I am diagnosing", "I have diagnosed", "I have been diagnosing", "I diagnosed", "I was diagnosing", "I had diagnosed", "I had been diagnosing", "I will diagnose", "I will be diagnosing", "I will have diagnosed", "I will have been diagnosing"],
["I treat", "I am treating", "I have treated", "I have been treating", "I treated", "I was treating", "I had treated", "I had been treating", "I will treat", "I will be treating", "I will have treated", "I will have been treating"],
["I cure", "I am curing", "I have cured", "I have been curing", "I cured", "I was curing", "I had cured", "I had been curing", "I will cure", "I will be curing", "I will have cured", "I will have been curing"],
["I operate", "I am operating", "I have operated", "I have been operating", "I operated", "I was operating", "I had operated", "I had been operating", "I will operate", "I will be operating", "I will have operated", "I will have been operating"],
["I prescribe", "I am prescribing", "I have prescribed", "I have been prescribing", "I prescribed", "I was prescribing", "I had prescribed", "I had been prescribing", "I will prescribe", "I will be prescribing", "I will have prescribed", "I will have been prescribing"],


["I clean", "I am cleaning", "I have cleaned", "I have been cleaning", "I cleaned", "I was cleaning", "I had cleaned", "I had been cleaning", "I will clean", "I will be cleaning", "I will have cleaned", "I will have been cleaning"],
["I scrub", "I am scrubbing", "I have scrubbed", "I have been scrubbing", "I scrubbed", "I was scrubbing", "I had scrubbed", "I had been scrubbing", "I will scrub", "I will be scrubbing", "I will have scrubbed", "I will have been scrubbing"],
["I disinfect", "I am disinfecting", "I have disinfected", "I have been disinfecting", "I disinfected", "I was disinfecting", "I had disinfected", "I had been disinfecting", "I will disinfect", "I will be disinfecting", "I will have disinfected", "I will have been disinfecting"],
["I sweep", "I am sweeping", "I have swept", "I have been sweeping", "I swept", "I was sweeping", "I had swept", "I had been sweeping", "I will sweep", "I will be sweeping", "I will have swept", "I will have been sweeping"],
["I mop", "I am mopping", "I have mopped", "I have been mopping", "I mopped", "I was mopping", "I had mopped", "I had been mopping", "I will mop", "I will be mopping", "I will have mopped", "I will have been mopping"],


["I plant", "I am planting", "I have planted", "I have been planting", "I planted", "I was planting", "I had planted", "I had been planting", "I will plant", "I will be planting", "I will have planted", "I will have been planting"],
["I grow", "I am growing", "I have grown", "I have been growing", "I grew", "I was growing", "I had grown", "I had been growing", "I will grow", "I will be growing", "I will have grown", "I will have been growing"],
["I water", "I am watering", "I have watered", "I have been watering", "I watered", "I was watering", "I had watered", "I had been watering", "I will water", "I will be watering", "I will have watered", "I will have been watering"],
["I prune", "I am pruning", "I have pruned", "I have been pruning", "I pruned", "I was pruning", "I had pruned", "I had been pruning", "I will prune", "I will be pruning", "I will have pruned", "I will have been pruning"],
["I harvest", "I am harvesting", "I have harvested", "I have been harvesting", "I harvested", "I was harvesting", "I had harvested", "I had been harvesting", "I will harvest", "I will be harvesting", "I will have harvested", "I will have been harvesting"],


["I play", "I am playing", "I have played", "I have been playing", "I played", "I was playing", "I had played", "I had been playing", "I will play", "I will be playing", "I will have played", "I will have been playing"],
["I enjoy", "I am enjoying", "I have enjoyed", "I have been enjoying", "I enjoyed", "I was enjoying", "I had enjoyed", "I had been enjoying", "I will enjoy", "I will be enjoying", "I will have enjoyed", "I will have been enjoying"],
["I laugh", "I am laughing", "I have laughed", "I have been laughing", "I laughed", "I was laughing", "I had laughed", "I had been laughing", "I will laugh", "I will be laughing", "I will have laughed", "I will have been laughing"],
["I dance", "I am dancing", "I have danced", "I have been dancing", "I danced", "I was dancing", "I had danced", "I had been dancing", "I will dance", "I will be dancing", "I will have danced", "I will have been dancing"],
["I celebrate", "I am celebrating", "I have celebrated", "I have been celebrating", "I celebrated", "I was celebrating", "I had celebrated", "I had been celebrating", "I will celebrate", "I will be celebrating", "I will have celebrated", "I will have been celebrating"],



["I infect", "I am infecting", "I have infected", "I have been infecting", "I infected", "I was infecting", "I had infected", "I had been infecting", "I will infect", "I will be infecting", "I will have infected", "I will have been infecting"],
["I spread", "I am spreading", "I have spread", "I have been spreading", "I spread", "I was spreading", "I had spread", "I had been spreading", "I will spread", "I will be spreading", "I will have spread", "I will have been spreading"],
["I suffer", "I am suffering", "I have suffered", "I have been suffering", "I suffered", "I was suffering", "I had suffered", "I had been suffering", "I will suffer", "I will be suffering", "I will have suffered", "I will have been suffering"],
["I contaminate", "I am contaminating", "I have contaminated", "I have been contaminating", "I contaminated", "I was contaminating", "I had contaminated", "I had been contaminating", "I will contaminate", "I will be contaminating", "I will have contaminated", "I will have been contaminating"],
["I recover", "I am recovering", "I have recovered", "I have been recovering", "I recovered", "I was recovering", "I had recovered", "I had been recovering", "I will recover", "I will be recovering", "I will have recovered", "I will have been recovering"],



["I desire", "I am desiring", "I have desired", "I have been desiring", "I desired", "I was desiring", "I had desired", "I had been desiring", "I will desire", "I will be desiring", "I will have desired", "I will have been desiring"],
["I want", "I am wanting", "I have wanted", "I have been wanting", "I wanted", "I was wanting", "I had wanted", "I had been wanting", "I will want", "I will be wanting", "I will have wanted", "I will have been wanting"],
["I wish", "I am wishing", "I have wished", "I have been wishing", "I wished", "I was wishing", "I had wished", "I had been wishing", "I will wish", "I will be wishing", "I will have wished", "I will have been wishing"],
["I crave", "I am craving", "I have craved", "I have been craving", "I craved", "I was craving", "I had craved", "I had been craving", "I will crave", "I will be craving", "I will have craved", "I will have been craving"],
["I yearn", "I am yearning", "I have yearned", "I have been yearning", "I yearned", "I was yearning", "I had yearned", "I had been yearning", "I will yearn", "I will be yearning", "I will have yearned", "I will have been yearning"],



["I mystify", "I am mystifying", "I have mystified", "I have been mystifying", "I mystified", "I was mystifying", "I had mystified", "I had been mystifying", "I will mystify", "I will be mystifying", "I will have mystified", "I will have been mystifying"],
["I bewilder", "I am bewildering", "I have bewildered", "I have been bewildering", "I bewildered", "I was bewildering", "I had bewildered", "I had been bewildering", "I will bewilder", "I will be bewildering", "I will have bewildered", "I will have been bewildering"],
["I haunt", "I am haunting", "I have haunted", "I have been haunting", "I haunted", "I was haunting", "I had haunted", "I had been haunting", "I will haunt", "I will be haunting", "I will have haunted", "I will have been haunting"],
["I vanish", "I am vanishing", "I have vanished", "I have been vanishing", "I vanished", "I was vanishing", "I had vanished", "I had been vanishing", "I will vanish", "I will be vanishing", "I will have vanished", "I will have been vanishing"],
["I transfigure", "I am transfiguring", "I have transfigured", "I have been transfiguring", "I transfigured", "I was transfiguring", "I had transfigured", "I had been transfiguring", "I will transfigure", "I will be transfiguring", "I will have transfigured", "I will have been transfiguring"],



["I love", "I am loving", "I have loved", "I have been loving", "I loved", "I was loving", "I had loved", "I had been loving", "I will love", "I will be loving", "I will have loved", "I will have been loving"],
["I adore", "I am adoring", "I have adored", "I have been adoring", "I adored", "I was adoring", "I had adored", "I had been adoring", "I will adore", "I will be adoring", "I will have adored", "I will have been adoring"],
["I flirt", "I am flirting", "I have flirted", "I have been flirting", "I flirted", "I was flirting", "I had flirted", "I had been flirting", "I will flirt", "I will be flirting", "I will have flirted", "I will have been flirting"],
["I kiss", "I am kissing", "I have kissed", "I have been kissing", "I kissed", "I was kissing", "I had kissed", "I had been kissing", "I will kiss", "I will be kissing", "I will have kissed", "I will have been kissing"],
["I embrace", "I am embracing", "I have embraced", "I have been embracing", "I embraced", "I was embracing", "I had embraced", "I had been embracing", "I will embrace", "I will be embracing", "I will have embraced", "I will have been embracing"],



["I travel", "I am traveling", "I have traveled", "I have been traveling", "I traveled", "I was traveling", "I had traveled", "I had been traveling", "I will travel", "I will be traveling", "I will have traveled", "I will have been traveling"],
["I reach", "I am reaching", "I have reached", "I have been reaching", "I reached", "I was reaching", "I had reached", "I had been reaching", "I will reach", "I will be reaching", "I will have reached", "I will have been reaching"],
["I journey", "I am journeying", "I have journeyed", "I have been journeying", "I journeyed", "I was journeying", "I had journeyed", "I had been journeying", "I will journey", "I will be journeying", "I will have journeyed", "I will have been journeying"],
["I wander", "I am wandering", "I have wandered", "I have been wandering", "I wandered", "I was wandering", "I had wandered", "I had been wandering", "I will wander", "I will be wandering", "I will have wandered", "I will have been wandering"],
["I advance", "I am advancing", "I have advanced", "I have been advancing", "I advanced", "I was advancing", "I had advanced", "I had been advancing", "I will advance", "I will be advancing", "I will have advanced", "I will have been advancing"],



["I drink", "I am drinking", "I have drunk", "I have been drinking", "I drank", "I was drinking", "I had drunk", "I had been drinking", "I will drink",, "I will be drinking", "I will have drunk", "I will have been drinking"],
["I sip", "I am sipping", "I have sipped", "I have been sipping", "I sipped", "I was sipping", "I had sipped", "I had been sipping", "I will sip", "I will be sipping", "I will have sipped", "I will have been sipping"],
["I guzzle", "I am guzzling", "I have guzzled", "I have been guzzling", "I guzzled", "I was guzzling", "I had guzzled", "I had been guzzling", "I will guzzle", "I will be guzzling", "I will have guzzled", "I will have been guzzling"],
["I swallow", "I am swallowing", "I have swallowed", "I have been swallowing", "I swallowed", "I was swallowing", "I had swallowed", "I had been swallowing", "I will swallow", "I will be swallowing", "I will have swallowed", "I will have been swallowing"]
["I quench", "I am quenching", "I have quenched", "I have been quenching", "I quenched", "I was quenching", "I had quenched", "I had been quenching", "I will quench", "I will be quenching", "I will have quenched", "I will have been quenching"],


["I reason", "I am reasoning", "I have reasoned", "I have been reasoning", "I reasoned", "I was reasoning", "I had reasoned", "I had been reasoning", "I will reason", "I will be reasoning", "I will have reasoned", "I will have been reasoning"],
["I analyze", "I am analyzing", "I have analyzed", "I have been analyzing", "I analyzed", "I was analyzing", "I had analyzed", "I had been analyzing", "I will analyze", "I will be analyzing", "I will have analyzed", "I will have been analyzing"],
["I deduce", "I am deducing", "I have deduced", "I have been deducing", "I deduced", "I was deducing", "I had deduced", "I had been deducing", "I will deduce", "I will be deducing", "I will have deduced", "I will have been deducing"],
["I infer", "I am inferring", "I have inferred", "I have been inferring", "I inferred", "I was inferring", "I had inferred", "I had been inferring", "I will infer", "I will be inferring", "I will have inferred", "I will have been inferring"],
["I contemplate", "I am contemplating", "I have contemplated", "I have been contemplating", "I contemplated", "I was contemplating", "I had contemplated", "I had been contemplating", "I will contemplate", "I will be contemplating", "I will have contemplated", "I will have been contemplating"],


["I hurt", "I am hurting", "I have hurt", "I have been hurting", "I hurt", "I was hurting", "I had hurt", "I had been hurting", "I will hurt", "I will be hurting", "I will have hurt", "I will have been hurting"],
["I suffer", "I am suffering", "I have suffered", "I have been suffering", "I suffered", "I was suffering", "I had suffered", "I had been suffering", "I will suffer", "I will be suffering", "I will have suffered", "I will have been suffering"],
["I ache", "I am aching", "I have ached", "I have been aching", "I ached", "I was aching", "I had ached", "I had been aching", "I will ache", "I will be aching", "I will have ached", "I will have been aching"],
["I throb", "I am throbbing", "I have throbbed", "I have been throbbing", "I throbbed", "I was throbbing", "I had throbbed", "I had been throbbing", "I will throb", "I will be throbbing", "I will have throbbed", "I will have been throbbing"],
["I wound", "I am wounding", "I have wounded", "I have been wounding", "I wounded", "I was wounding", "I had wounded", "I had been wounding", "I will wound", "I will be wounding", "I will have wounded", "I will have been wounding"],





["I hope", "I am hoping", "I have hoped", "I have been hoping", "I hoped", "I was hoping", "I had hoped", "I had been hoping", "I will hope", "I will be hoping", "I will have hoped", "I will have been hoping"],
["I wish", "I am wishing", "I have wished", "I have been wishing", "I wished", "I was wishing", "I had wished", "I had been wishing", "I will wish", "I will be wishing", "I will have wished", "I will have been wishing"],
["I dream", "I am dreaming", "I have dreamed", "I have been dreaming", "I dreamed", "I was dreaming", "I had dreamed", "I had been dreaming", "I will dream", "I will be dreaming", "I will have dreamed", "I will have been dreaming"],
["I aspire", "I am aspiring", "I have aspired", "I have been aspiring", "I aspired", "I was aspiring", "I had aspired", "I had been aspiring", "I will aspire", "I will be aspiring", "I will have aspired", "I will have been aspiring"],
["I long", "I am longing", "I have longed", "I have been longing", "I longed", "I was longing", "I had longed", "I had been longing", "I will long", "I will be longing", "I will have longed", "I will have been longing"],



["I stabilize", "I am stabilizing", "I have stabilized", "I have been stabilizing", "I stabilized", "I was stabilizing", "I had stabilized", "I had been stabilizing", "I will stabilize", "I will be stabilizing", "I will have stabilized", "I will have been stabilizing"],
["I secure", "I am securing", "I have secured", "I have been securing", "I secured", "I was securing", "I had secured", "I had been securing", "I will secure", "I will be securing", "I will have secured", "I will have been securing"],
["I anchor", "I am anchoring", "I have anchored", "I have been anchoring", "I anchored", "I was anchoring", "I had anchored", "I had been anchoring", "I will anchor", "I will be anchoring", "I will have anchored", "I will have been anchoring"],
["I balance", "I am balancing", "I have balanced", "I have been balancing", "I balanced", "I was balancing", "I had balanced", "I had been balancing", "I will balance", "I will be balancing", "I will have balanced", "I will have been balancing"],
["I solidify", "I am solidifying", "I have solidified", "I have been solidifying", "I solidified", "I was solidifying", "I had solidified", "I had been solidifying", "I will solidify", "I will be solidifying", "I will have solidified", "I will have been solidifying"],




["I speak", "I am speaking", "I have spoken", "I have been speaking", "I spoke", "I was speaking", "I had spoken", "I had been speaking", "I will speak", "I will be speaking", "I will have spoken", "I will have been speaking"],
["I talk", "I am talking", "I have talked", "I have been talking", "I talked", "I was talking", "I had talked", "I had been talking", "I will talk", "I will be talking", "I will have talked", "I will have been talking"],
["I communicate", "I am communicating", "I have communicated", "I have been communicating", "I communicated", "I was communicating", "I had communicated", "I had been communicating", "I will communicate", "I will be communicating", "I will have communicated", "I will have been communicating"],
["I announce", "I am announcing", "I have announced", "I have been announcing", "I announced", "I was announcing", "I had announced", "I had been announcing", "I will announce", "I will be announcing", "I will have announced", "I will have been announcing"],
["I declare", "I am declaring", "I have declared", "I have been declaring", "I declared", "I was declaring", "I had declared", "I had been declaring", "I will declare", "I will be declaring", "I will have declared", "I will have been declaring"],




["I brush", "I am brushing", "I have brushed", "I have been brushing", "I brushed", "I was brushing", "I had brushed", "I had been brushing", "I will brush", "I will be brushing", "I will have brushed", "I will have been brushing"],
["I bite", "I am biting", "I have bitten", "I have been biting", "I bit", "I was biting", "I had bitten", "I had been biting", "I will bite", "I will be biting", "I will have bitten", "I will have been biting"],
["I chew", "I am chewing", "I have chewed", "I have been chewing", "I chewed", "I was chewing", "I had chewed", "I had been chewing", "I will chew", "I will be chewing", "I will have chewed", "I will have been chewing"],
["I floss", "I am flossing", "I have flossed", "I have been flossing", "I flossed", "I was flossing", "I had flossed", "I had been flossing", "I will floss", "I will be flossing", "I will have flossed", "I will have been flossing"],
["I grind", "I am grinding", "I have ground", "I have been grinding", "I ground", "I was grinding", "I had ground", "I had been grinding", "I will grind", "I will be grinding", "I will have ground", "I will have been grinding"],


["I shine", "I am shining", "I have shone", "I have been shining", "I shone", "I was shining", "I had shone", "I had been shining", "I will shine", "I will be shining", "I will have shone", "I will have been shining"],
["I illuminate", "I am illuminating", "I have illuminated", "I have been illuminating", "I illuminated", "I was illuminating", "I had illuminated", "I had been illuminating", "I will illuminate", "I will be illuminating", "I will have illuminated", "I will have been illuminating"],
["I glow", "I am glowing", "I have glowed", "I have been glowing", "I glowed", "I was glowing", "I had glowed", "I had been glowing", "I will glow", "I will be glowing", "I will have glowed", "I will have been glowing"],
["I flicker", "I am flickering", "I have flickered", "I have been flickering", "I flickered", "I was flickering", "I had flickered", "I had been flickering", "I will flicker", "I will be flickering", "I will have flickered", "I will have been flickering"],
["I reflect", "I am reflecting", "I have reflected", "I have been reflecting", "I reflected", "I was reflecting", "I had reflected", "I had been reflecting", "I will reflect", "I will be reflecting", "I will have reflected", "I will have been reflecting"],



["I brave", "I am braving", "I have braved", "I have been braving", "I braved", "I was braving", "I had braved", "I had been braving", "I will brave", "I will be braving", "I will have braved", "I will have been braving"],
["I confront", "I am confronting", "I have confronted", "I have been confronting", "I confronted", "I was confronting", "I had confronted", "I had been confronting", "I will confront", "I will be confronting", "I will have confronted", "I will have been confronting"],
["I challenge", "I am challenging", "I have challenged", "I have been challenging", "I challenged", "I was challenging", "I had challenged", "I had been challenging", "I will challenge", "I will be challenging", "I will have challenged", "I will have been challenging"],
["I defend", "I am defending", "I have defended", "I have been defending", "I defended", "I was defending", "I had defended", "I had been defending", "I will defend", "I will be defending", "I will have defended", "I will have been defending"],
["I dare", "I am daring", "I have dared", "I have been daring", "I dared", "I was daring", "I had dared", "I had been daring", "I will dare", "I will be daring", "I will have dared", "I will have been daring"],



["I whisper", "I am whispering", "I have whispered", "I have been whispering", "I whispered", "I was whispering", "I had whispered", "I had been whispering", "I will whisper", "I will be whispering", "I will have whispered", "I will have been whispering"],
["I murmur", "I am murmuring", "I have murmured", "I have been murmuring", "I murmured", "I was murmuring", "I had murmured", "I had been murmuring", "I will murmur", "I will be murmuring", "I will have murmured", "I will have been murmuring"],
["I mutter", "I am muttering", "I have muttered", "I have been muttering", "I muttered", "I was muttering", "I had muttered", "I had been muttering", "I will mutter", "I will be muttering", "I will have muttered", "I will have been muttering"],
["I hiss", "I am hissing", "I have hissed", "I have been hissing", "I hissed", "I was hissing", "I had hissed", "I had been hissing", "I will hiss", "I will be hissing", "I will have hissed", "I will have been hissing"],
["I breathe", "I am breathing", "I have breathed", "I have been breathing", "I breathed", "I was breathing", "I had breathed", "I had been breathing", "I will breathe", "I will be breathing", "I will have breathed", "I will have been breathing"],





["I drown", "I am drowning", "I have drowned", "I have been drowning", "I drowned", "I was drowning", "I had drowned", "I had been drowning", "I will drown", "I will be drowning", "I will have drowned", "I will have been drowning"],
["I soak", "I am soaking", "I have soaked", "I have been soaking", "I soaked", "I was soaking", "I had soaked", "I had been soaking", "I will soak", "I will be soaking", "I will have soaked", "I will have been soaking"],
["I flood", "I am flooding", "I have flooded", "I have been flooding", "I flooded", "I was flooding", "I had flooded", "I had been flooding", "I will flood", "I will be flooding", "I will have flooded", "I will have been flooding"],
["I spill", "I am spilling", "I have spilled", "I have been spilling", "I spilled", "I was spilling", "I had spilled", "I had been spilling", "I will spill", "I will be spilling", "I will have spilled", "I will have been spilling"],
["I ripple", "I am rippling", "I have rippled", "I have been rippling", "I rippled", "I was rippling", "I had rippled", "I had been rippling", "I will ripple", "I will be rippling", "I will have rippled", "I will have been rippling"],




["I escape", "I am escaping", "I have escaped", "I have been escaping", "I escaped", "I was escaping", "I had escaped", "I had been escaping", "I will escape", "I will be escaping", "I will have escaped", "I will have been escaping"],
["I flee", "I am fleeing", "I have fled", "I have been fleeing", "I fled", "I was fleeing", "I had fled", "I had been fleeing", "I will flee", "I will be fleeing", "I will have fled", "I will have been fleeing"],
["I evade", "I am evading", "I have evaded", "I have been evading", "I evaded", "I was evading", "I had evaded", "I had been evading", "I will evade", "I will be evading", "I will have evaded", "I will have been evading"],
["I elude", "I am eluding", "I have eluded", "I have been eluding", "I eluded", "I was eluding", "I had eluded", "I had been eluding", "I will elude", "I will be eluding", "I will have eluded", "I will have been eluding"],
["I break free", "I am breaking free", "I have broken free", "I have been breaking free", "I broke free", "I was breaking free", "I had broken free", "I had been breaking free", "I will break free", "I will be breaking free", "I will have broken free", "I will have been breaking free"],




["I dream", "I am dreaming", "I have dreamed", "I have been dreaming", "I dreamed", "I was dreaming", "I had dreamed", "I had been dreaming", "I will dream", "I will be dreaming", "I will have dreamed", "I will have been dreaming"],
["I imagine", "I am imagining", "I have imagined", "I have been imagining", "I imagined", "I was imagining", "I had imagined", "I had been imagining", "I will imagine", "I will be imagining", "I will have imagined", "I will have been imagining"],
["I visualize", "I am visualizing", "I have visualized", "I have been visualizing", "I visualized", "I was visualizing", "I had visualized", "I had been visualizing", "I will visualize", "I will be visualizing", "I will have visualized", "I will have been visualizing"],
["I daydream", "I am daydreaming", "I have daydreamed", "I have been daydreaming", "I daydreamed", "I was daydreaming", "I had daydreamed", "I had been daydreaming", "I will daydream", "I will be daydreaming", "I will have daydreamed", "I will have been daydreaming"],
["I fantasize", "I am fantasizing", "I have fantasized", "I have been fantasizing", "I fantasized", "I was fantasizing", "I had fantasized", "I had been fantasizing", "I will fantasize", "I will be fantasizing", "I will have fantasized", "I will have been fantasizing"],



["I focus", "I am focusing", "I have focused", "I have been focusing", "I focused", "I was focusing", "I had focused", "I had been focusing", "I will focus", "I will be focusing", "I will have focused", "I will have been focusing"],
["I concentrate", "I am concentrating", "I have concentrated", "I have been concentrating", "I concentrated", "I was concentrating", "I had concentrated", "I had been concentrating", "I will concentrate", "I will be concentrating", "I will have concentrated", "I will have been concentrating"],
["I pay attention", "I am paying attention", "I have paid attention", "I have been paying attention", "I paid attention", "I was paying attention", "I had paid attention", "I had been paying attention", "I will pay attention", "I will be paying attention", "I will have paid attention", "I will have been paying attention"],
["I heed", "I am heeding", "I have heeded", "I have been heeding", "I heeded", "I was heeding", "I had heeded", "I had been heeding", "I will heed", "I will be heeding", "I will have heeded", "I will have been heeding"]
["I zero in on", "I am zeroing in on", "I have zeroed in on", "I have been zeroing in on", "I zeroed in on", "I was zeroing in on", "I had zeroed in on", "I had been zeroing in on", "I will zero in on", "I will be zeroing in on", "I will have zeroed in on", "I will have been zeroing in on"],





["I calculate", "I am calculating", "I have calculated", "I have been calculating", "I calculated", "I was calculating", "I had calculated", "I had been calculating", "I will calculate", "I will be calculating", "I will have calculated", "I will have been calculating"],
["I add", "I am adding", "I have added", "I have been adding", "I added", "I was adding", "I had added", "I had been adding", "I will add", "I will be adding", "I will have added", "I will have been adding"],
["I subtract", "I am subtracting", "I have subtracted", "I have been subtracting", "I subtracted", "I was subtracting", "I had subtracted", "I had been subtracting", "I will subtract", "I will be subtracting", "I will have subtracted", "I will have been subtracting"],
["I multiply", "I am multiplying", "I have multiplied", "I have been multiplying", "I multiplied", "I was multiplying", "I had multiplied", "I had been multiplying", "I will multiply", "I will be multiplying", "I will have multiplied", "I will have been multiplying"],
["I divide", "I am dividing", "I have divided", "I have been dividing", "I divided", "I was dividing", "I had divided", "I had been dividing", "I will divide", "I will be dividing", "I will have divided", "I will have been dividing"],




["I rent", "I am renting", "I have rented", "I have been renting", "I rented", "I was renting", "I had rented", "I had been renting", "I will rent", "I will be renting", "I will have rented", "I will have been renting"],
["I furnish", "I am furnishing", "I have furnished", "I have been furnishing", "I furnished", "I was furnishing", "I had furnished", "I had been furnishing", "I will furnish", "I will be furnishing", "I will have furnished", "I will have been furnishing"],
["I decorate", "I am decorating", "I have decorated", "I have been decorating", "I decorated", "I was decorating", "I had decorated", "I had been decorating", "I will decorate", "I will be decorating", "I will have decorated", "I will have been decorating"],
["I clean", "I am cleaning", "I have cleaned", "I have been cleaning", "I cleaned", "I was cleaning", "I had cleaned", "I had been cleaning", "I will clean", "I will be cleaning", "I will have cleaned", "I will have been cleaning"],
["I lease", "I am leasing", "I have leased", "I have been leasing", "I leased", "I was leasing", "I had leased", "I had been leasing", "I will lease", "I will be leasing", "I will have leased", "I will have been leasing"],



["I wear", "I am wearing", "I have worn", "I have been wearing", "I wore", "I was wearing", "I had worn", "I had been wearing", "I will wear", "I will be wearing", "I will have worn", "I will have been wearing"],
["I adorn", "I am adorning", "I have adorned", "I have been adorning", "I adorned", "I was adorning", "I had adorned", "I had been adorning", "I will adorn", "I will be adorning", "I will have adorned", "I will have been adorning"], 
["I craft", "I am crafting", "I have crafted", "I have been crafting", "I crafted", "I was crafting", "I had crafted", "I had been crafting", "I will craft", "I will be crafting", "I will have crafted", "I will have been crafting"],
["I design", "I am designing", "I have designed", "I have been designing", "I designed", "I was designing", "I had designed", "I had been designing", "I will design", "I will be designing", "I will have designed", "I will have been designing"],
["I polish", "I am polishing", "I have polished", "I have been polishing", "I polished", "I was polishing", "I had polished", "I had been polishing", "I will polish", "I will be polishing", "I will have polished", "I will have been polishing"],



["I buy", "I am buying", "I have bought", "I have been buying", "I bought", "I was buying", "I had bought", "I had been buying", "I will buy", "I will be buying", "I will have bought", "I will have been buying"],
["I shop", "I am shopping", "I have shopped", "I have been shopping", "I shopped", "I was shopping", "I had shopped", "I had been shopping", "I will shop", "I will be shopping", "I will have shopped", "I will have been shopping"],
["I select", "I am selecting", "I have selected", "I have been selecting", "I selected", "I was selecting", "I had selected", "I had been selecting", "I will select", "I will be selecting", "I will have selected", "I will have been selecting"],
["I carry", "I am carrying", "I have carried", "I have been carrying", "I carried", "I was carrying", "I had carried", "I had been carrying", "I will carry", "I will be carrying", "I will have carried", "I will have been carrying"],
["I stock", "I am stocking", "I have stocked", "I have been stocking", "I stocked", "I was stocking", "I had stocked", "I had been stocking", "I will stock", "I will be stocking", "I will have stocked", "I will have been stocking"],



["I feel", "I am feeling", "I have felt", "I have been feeling", "I felt", "I was feeling", "I had felt", "I had been feeling", "I will feel", "I will be feeling", "I will have felt", "I will have been feeling"],
["I love", "I am loving", "I have loved", "I have been loving", "I loved", "I was loving", "I had loved", "I had been loving", "I will love", "I will be loving", "I will have loved", "I will have been loving"],
["I hate", "I am hating", "I have hated", "I have been hating", "I hated", "I was hating", "I had hated", "I had been hating", "I will hate", "I will be hating", "I will have hated", "I will have been hating"],
["I enjoy", "I am enjoying", "I have enjoyed", "I have been enjoying", "I enjoyed", "I was enjoying", "I had enjoyed", "I had been enjoying", "I will enjoy", "I will be enjoying", "I will have enjoyed", "I will have been enjoying"],
["I suffer", "I am suffering", "I have suffered", "I have been suffering", "I suffered", "I was suffering", "I had suffered", "I had been suffering", "I will suffer", "I will be suffering", "I will have suffered", "I will have been suffering"],


["I shelter", "I am sheltering", "I have sheltered", "I have been sheltering", "I sheltered", "I was sheltering", "I had sheltered", "I had been sheltering", "I will shelter", "I will be sheltering", "I will have sheltered", "I will have been sheltering"],
["I build", "I am building", "I have built", "I have been building", "I built", "I was building", "I had built", "I had been building", "I will build", "I will be building", "I will have built", "I will have been building"],
["I protect", "I am protecting", "I have protected", "I have been protecting", "I protected", "I was protecting", "I had protected", "I had been protecting", "I will protect", "I will be protecting", "I will have protected", "I will have been protecting"],
["I house", "I am housing", "I have housed", "I have been housing", "I housed", "I was housing", "I had housed", "I had been housing", "I will house", "I will be housing", "I will have housed", "I will have been housing"],
["I maintain", "I am maintaining", "I have maintained", "I have been maintaining", "I maintained", "I was maintaining", "I had maintained", "I had been maintaining", "I will maintain", "I will be maintaining", "I will have maintained", "I will have been maintaining"],




["I feed", "I am feeding", "I have fed", "I have been feeding", "I fed", "I was feeding", "I had fed", "I had been feeding", "I will feed", "I will be feeding", "I will have fed", "I will have been feeding"],
["I groom", "I am grooming", "I have groomed", "I have been grooming", "I groomed", "I was grooming", "I had groomed", "I had been grooming", "I will groom", "I will be grooming", "I will have groomed", "I will have been grooming"],
["I train", "I am training", "I have trained", "I have been training", "I trained", "I was training", "I had trained", "I had been training", "I will train", "I will be training", "I will have trained", "I will have been training"],
["I walk", "I am walking", "I have walked", "I have been walking", "I walked", "I was walking", "I had walked", "I had been walking", "I will walk", "I will be walking", "I will have walked", "I will have been walking"],
["I care for", "I am caring for", "I have cared for", "I have been caring for", "I cared for", "I was caring for", "I had cared for", "I had been caring for", "I will care for", "I will be caring for", "I will have cared for", "I will have been caring for"],



["I retire", "I am retiring", "I have retired", "I have been retiring", "I retired", "I was retiring", "I had retired", "I had been retiring", "I will retire", "I will be retiring", "I will have retired", "I will have been retiring"],
["I reflect", "I am reflecting", "I have reflected", "I have been reflecting", "I reflected", "I was reflecting", "I had reflected", "I had been reflecting", "I will reflect", "I will be reflecting", "I will have reflected", "I will have been reflecting"],
["I reminisce", "I am reminiscing", "I have reminisced", "I have been reminiscing", "I reminisced", "I was reminiscing", "I had reminisced", "I had been reminiscing", "I will reminisce", "I will be reminiscing", "I will have reminisced", "I will have been reminiscing"],
["I age", "I am aging", "I have aged", "I have been aging", "I aged", "I was aging", "I had aged", "I had been aging", "I will age", "I will be aging", "I will have aged", "I will have been aging"],
["I relive", "I am reliving", "I have relived", "I have been reliving", "I relived", "I was reliving", "I had relived", "I had been reliving", "I will relive", "I will be reliving", "I will have relived", "I will have been reliving"],



];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateTextAreas() {
    for (let i = 1; i <= 12; i++) {
        document.getElementById(`text${i}`).value = data[currentIndex][i - 1];
    }
    currentIndex++;
    if (currentIndex >= data.length) {
        shuffleArray(data);
        currentIndex = 0;
    }
}

document.getElementById('nextButton').addEventListener('click', updateTextAreas);

// Shuffle and initialize with the first set of data
shuffleArray(data);
window.onload = updateTextAreas;


// let currentIndex = 0;
// const data = [
//     ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1'],
//     ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'L2'],
//     ["I eat", "I am eating", "I have eaten", "I have been eating", "I ate", "I was eating", "I had eaten", "I had been eating", "I will eat", "I will be eating", "I will have eaten", "I will have been eating"],
//     ["I run", "I am running", "I have run", "I have been running", "I ran", "I was running", "I had run", "I had been running", "I will run", "I will be running", "I will have run", "I will have been running"],
//     ["I read", "I am reading", "I have read", "I have been reading", "I read (past tense)", "I was reading", "I had read", "I had been reading", "I will read", "I will be reading", "I will have read", "I will have been reading"],
//     ["I play", "I am playing", "I have played", "I have been playing", "I played", "I was playing", "I had played", "I had been playing", "I will play", "I will be playing", "I will have played", "I will have been playing"],

//     // Add more arrays as needed
// ];

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function updateTextAreas() {
//     for (let i = 1; i <= 12; i++) {
//         document.getElementById(`text${i}`).value = data[currentIndex][i - 1];
//     }
//     currentIndex++;
//     if (currentIndex >= data.length) {
//         shuffleArray(data);
//         currentIndex = 0;
//     }
// }