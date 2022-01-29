const votes=[
    'Rasel', 'Tanim', 'Sobur','Juman','Juman','Juman','Juman','Juman','Juman', 'Anwar','Rasel','Rasel','Rasel','Rasel','Rasel','Tanim','Tanim','Tanim','Anwar','Anwar','Sobur','Sobur','Sobur',
]

const tallyVotes=votes=>
    votes.reduce((acc, name)=> ({
        ...acc,
        [name]:acc[name] ? acc[name]+1:1,
    }),{});


console.log(tallyVotes(votes))