var port = chrome.runtime.connect({name: "comm"});

$(document).ready(function(){
    $('body').on('click', 'a', function(){
      chrome.tabs.create({url: $(this).attr('href')});
      return false;
    });
 });

var evil = [
    {
        "name":"Choary Eco-friendly Unbreakable Reusable Drinking Cup for Adult(12 OZ), Wheat Straw Biodegradable Healthy Tumbler Set 5-Multicolor, Dishwasher Safe",
        "url":"https://www.amazon.com/Eco-friendly-Unbreakable-Biodegradable-5-Multicolor-Dishwasher/dp/B07SQR29FB/ref=sr_1_3?dchild=1&keywords=Plastic+tumbler+eco-friendly&qid=1599398400&s=home-garden&sr=1-3",
        "img":"https://images-na.ssl-images-amazon.com/images/I/51ozHl04QNL._AC_SX679_.jpg",
        "price":"$11.99",
        "sin":"Tumblers"
    },
    {
        "name":"Caring Planet - Compostable Cutlery - Eco-Friendly Durable & 100% Biodegradable Utensils Plant Based Cutlery 150 pcs (50) Forks (50) Knives (50) Spoons",
        "url":"https://www.amazon.com/Caring-Planet-Compostable-Cutlery-Biodegradeable/dp/B081318MJM/ref=sr_1_1_sspa?dchild=1&keywords=eco-friendly&qid=1599386548&s=home-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUEZPNVI4SzlTRkdaJmVuY3J5cHRlZElkPUEwMjg4NjUyMklSRzREWFBEUUwwMSZlbmNyeXB0ZWRBZElkPUEwMzA0MDczMk0yMzhZMTE5SVAzMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        "img":"https://images-na.ssl-images-amazon.com/images/I/81D51-PKCnL._AC_SX679_.jpg",
        "price":"$17.49",
        "sin":"Cutlery"
    },
    {
        "name":"Eco Pen Club (10 Pack) (BLACK INK) Eco-friendly Recycled Black Blue Ball Point 0.7mm Pens, Made from Biodegradable and Recyclable Materials. Great Gifts. For School Office and Home",
        "url":"https://www.amazon.com/Eco-Pen-Club-Eco-friendly-Biodegradable/dp/B081FF7J2P/ref=sr_1_5?crid=1SY0KBLRZS4X3&dchild=1&keywords=eco+friendly+pen&qid=1599400789&sprefix=pen+eco-fr%2Caps%2C212&sr=8-5",
        "img":"https://images-na.ssl-images-amazon.com/images/I/61X2qCFyNjL._AC_SX679_.jpg",
        "price":"$9.99",
        "sin":"Pen"
    },
    {
        "name":"JanSport Recycled SuperBreak Backpack - Sustainable and Eco-Friendly Bookbags",
        "url":"https://www.amazon.com/JanSport-Recycled-Superbreak-Backpack-Eco-Friendly/dp/B083QS8MZW?pf_rd_r=9N5JKVDD4EMC92K4J6JQ&pf_rd_p=3fdb7f7b-31a2-4f37-b9bc-1469e3d4fb18&pd_rd_r=86a9654a-391a-4520-94ea-c1f389577a76&pd_rd_w=9XEv3&pd_rd_wg=CCKKJ&ref_=pd_gw_ci_mcx_mr_hp_d",
        "img":"https://images-na.ssl-images-amazon.com/images/I/91JJPDYPNhL._AC_UX679_.jpg",
        "price":"$37.49",
        "sin":"Backpack"
    },

];



port.onMessage.addListener(function(msg) {
    
    if (msg.message === "ITEM IMAGE") {
        var found = false;
        for (var i=0;i<evil.length;i++){
            if (msg.title.includes(evil[i]['sin'])) {
                $('#container').html("<h3><a href='" + evil[i]['url'] + "'>" + evil[i]['name'] + "</a></h3>");
                $('#container').append("<img id='alt_item_img' src='" +evil[i]['img']+"'></img>");
                $('#alt_item_img').width(200);
                $('#container').append("<h4>"+evil[i]['price']+"</h4>");
                found = true;
            } 
        }
    //    if (!found) {
    //     $('#container').html("<h4>Sorry, we could't find an alternative for this item at this moment.</h4>"); 
    //    }
    }
});