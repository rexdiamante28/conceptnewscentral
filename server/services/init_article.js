Meteor.startup(function() {

    appDump.allow = function() {
      return true
    };
    var images = [{url:'/images/uploads/news.jpg'}];


    if(Articles.find().count() === 0){
        // RIGHT
        for(var i = 0; i < 10; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: images,
                postedBy: 'Concept News Central',
                location: 'RIGHT',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // URR
        Articles.insert({
            title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
            body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
            author: 'Concept',
            pubDate: new Date(),
            images: images,
            postedBy: 'Concept News Central',
            location: 'URR',
            level: 1,
            status: 'PUBLISHED',
            isBroadCasted: false,
            categories: [
                {'name': 'Headlines'},
                {'name': 'Global'},
            ],
            tags: [
                {'name': 'Global'},
                {'name': 'Headlines'},
                {'name': 'Trending'}
            ]
        })

        // LLM
        for(var i = 0; i < 3; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'LLM',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // URLF
        Articles.insert({
            title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
            body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
            author: 'Concept',
            pubDate: new Date(),
            images: images,
            postedBy: 'Concept News Central',
            location: 'URLF',
            level: 1,
            status: 'PUBLISHED',
            isBroadCasted: false,
            categories: [
                {'name': 'Headlines'},
                {'name': 'Global'},
            ],
            tags: [
                {'name': 'Global'},
                {'name': 'Headlines'},
                {'name': 'Trending'}
            ]
        })

        // URRF
        Articles.insert({
            title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
            body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
            author: 'Concept',
            pubDate: new Date(),
            images: images,
            postedBy: 'Concept News Central',
            location: 'URRF',
            level: 1,
            status: 'PUBLISHED',
            isBroadCasted: false,
            categories: [
                {'name': 'Headlines'},
                {'name': 'Global'},
            ],
            tags: [
                {'name': 'Global'},
                {'name': 'Headlines'},
                {'name': 'Trending'}
            ]
        })

        // MIDDLE
        for(var i = 0; i < 3; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'MIDDLE',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // LEFT
        for(var i = 0; i < 4; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'LEFT',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // FEATURED
        Articles.insert({
            title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
            body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
            author: 'Concept',
            pubDate: new Date(),
            images: images,
            postedBy: 'Concept News Central',
            location: 'FEATURED',
            level: 1,
            status: 'PUBLISHED',
            isBroadCasted: false,
            categories: [
                {'name': 'Headlines'},
                {'name': 'Global'},
            ],
            tags: [
                {'name': 'Global'},
                {'name': 'Headlines'},
                {'name': 'Trending'}
            ]
        })

        // TEMP
        for(var i = 0; i < 3; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'TEMP',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // LR
        for(var i = 0; i < 4; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'LR',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // CTGL
        for(var i = 0; i < 3; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'CTGL',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // CTGR
        for(var i = 0; i < 3; i ++) {
            Articles.insert({
                title: 'Who were the magnanakaw, mainitin ang ulo, bagito',
                body: 'ADMINISTRATION standard-bearer Mar Roxas opened the first leg of the 2016 Presidential Debates Sunday by openly attacking his fellow candidates, calling one magnanakaw (thief), describing one or two as mainitin ang ulo (hot-headed) and tagging another as a bagito or neophyte. Roxas, however, did not go so far as to name names, even as his fellow candidates chose not to be baited by his opening line which also harped on how he will supposedly continue the daang matuwid or the claimed straight path of the present administration. All five presidential candidates, including Vice President Jejomar Binay, gamely answered questions and rebutted their respective positions on such issues as poverty, criminality and the under-development of Mindanao. However, the mutual respect between PDP Laban bet Davao City Mayor Rodrigo Duterte and Sen. Miriam Defensor-Santiago shone through. Duterte pointed out that he will stop criminality and the drug trade in the first three to six months of his administration. He also vowed to even stop the proliferation of rice cartels in just three days. Duterte reserved his harshest words for Roxas in discrediting the latter’s claim that the present administration poured in more money in Mindanao in the last five years than in the combined 12 years of the previous administration of Gloria Macapagal-Arroyo and now Manila mayor Joseph Estrada. Habang totoo na napag-iwanan ang Mindanao, hindi na po yan ang nangyayari ngayon… P260 billion pesos ang dumating sa Mindanao itong nakaraang 5 taon kumpara sa 125 billion noong 12 taon ni Gloria at ni Erap (while it is true that Mindanao was left behind, that is not true any more…P260 billion went to Mindanao these past 5 years compared to P125 billion during the 12 years of Gloria and Erap), said Roxas. Duterte retorted by saying that the administration’s daang matuwid is but an illussion, commenting that: Wala akong nakitang tuwid na daan, puro kulubot lang yan, he said. (I did not see any straight path. Nothing but crookedness. Duterte, who has Senator Alan Peter Cayetano as running mate, said the money being touted by Roxas meant nothing unless an accounting of where they went is made.You do not count the funds given during the last 5 years. Naubos sa corruption (They went to corruption), said Duterte. In addressing the Mindanao problem of under-development, Duterte said that while Mindanao contributes a lot to the national treasury especially from agriculture, the region does not gets its share of allocation in the yearly budget.',
                author: 'Concept',
                pubDate: new Date(),
                images: [
                    {'url': '/images/uploads/news.jpg', 'isFeatured': true},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false},
                    {'url': '/images/uploads/news.jpg', 'isFeatured': false}
                ],
                postedBy: 'Concept News Central',
                location: 'CTGR',
                level: 1,
                status: 'PUBLISHED',
                isBroadCasted: false,
                categories: [
                    {'name': 'Headlines'},
                    {'name': 'Global'},
                ],
                tags: [
                    {'name': 'Global'},
                    {'name': 'Headlines'},
                    {'name': 'Trending'}
                ]
            })
        }

        // VIDEOS
        for(var i = 0; i < 5; i ++) {
           Videos.insert({
               link: '6ECj5PNndFk',
               autoplay: 0,
               type: 'REGULAR'
           })
        }

        Videos.insert({
            link: '6ECj5PNndFk',
            autoplay: 0,
            type: 'FEATURED'
        })



        // CATEGORIES
        Categories.insert({
            name: 'Business',
            slug: 'Business',
            description: 'Business'
        })

        Categories.insert({
            name: 'Concept',
            slug: 'Concept',
            description: 'Concept'
        })

        Categories.insert({
            name: 'Entertainment',
            slug: 'Entertainment',
            description: 'Entertainment'
        })

        Categories.insert({
            name: 'Headlines',
            slug: 'Headlines',
            description: 'Headlines'
        })

        Categories.insert({
            name: 'Nation',
            slug: 'Nation',
            description: 'Nation'
        })

        Categories.insert({
            name: 'Sports',
            slug: 'Sports',
            description: 'Sports'
        })

        Categories.insert({
            name: 'World',
            slug: 'World',
            description: 'World'
        })

        Categories.insert({
            name: 'Technology',
            slug: 'Technology',
            description: 'Technology'
        })

        Categories.insert({
            name: 'Opinion',
            slug: 'Opinion',
            description: 'Opinion'
        })





    }

    Meteor.publish('getAllArticles', function () {
        return Articles.find()
    })
})

Meteor.methods({
    'removeAllArticles': function () {
        Articles.remove({})
        Categories.remove({})
        Videos.remove({})
    }
})
