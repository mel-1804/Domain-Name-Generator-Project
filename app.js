let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.cl', '.ve', 'org']


let result = [];
for (let a in pronoun){
    for (let b in adj){
        for (let c in noun){
            for (let d in extension){
                result.push(pronoun[a]+adj[b]+noun[c]+extension[d])
            }
        }
    }
}




    console.log(result);