let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.cl', '.ve', '.org']


let result = [];
for (a in pronoun){
    for (b in adj){
        for (c in noun){
            for (d in extension){
                result.push(pronoun[a]+adj[b]+noun[c]+extension[d])
            }
        }
    }
}




    console.log(result);