
    var ctx = document.getElementById("fiberArts").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        options: {
        title: {
            display: true,
            text: 'What fiber arts do you do?',
            fontFamily: 'Montserrat'
            
        }
        },
        data: {
            labels: ["knit", "dye", "weave", "crochet", "spin"],
            datasets: [{
                label: 'What fiber arts do you do?',
                data: [45, 10, 9, 22, 12],
                
                backgroundColor: [
                    'rgba(92, 193, 181)',
                    'rgba(196, 196, 196)',
                    'rgba(46, 70, 79)',
                    'rgba(244, 244, 244)',
                    'rgba(226, 159, 76)'
                    
                ],
                borderColor: [
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)'
                    
                ],
                borderWidth: 2,
                
                
            }]
        }
        
    });

    var sellHandcrafted = document.getElementById("chart2").getContext('2d');
    var myChart = new Chart(sellHandcrafted, {
        type: 'horizontalBar',
        options: {
        title: {
            display: true,
            text: 'Where do you sell your hand-crafted yarn?',
            fontFamily: 'Montserrat'
            
        }
        },
        data: {
            labels: ["personal website", "Etsy", "farmers market", "spinners guild", "friends", "Ebay", "vendor fairs", "other"],
            datasets: [{
                label: 'percentage of sales',
                data: [40, 60, 40, 20, 20, 20, 20, 0],
                
                backgroundColor: [
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)',
                    'rgba(92, 193, 181)'
                    
                ],
                borderColor: [
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)'
                    
                ],
                borderWidth: 2,
                
                
            }]
        }
        
    });


    var whatMatters = document.getElementById("chart3").getContext('2d');
    var myChart = new Chart(whatMatters, {
        type: 'horizontalBar',
        options: {
        title: {
            display: true,
            text: 'When purchasing hand-crafted yarn, what matters most?',
            fontFamily: 'Montserrat'
            
        }
        },
        data: {
            labels: ["one-of-a-king", "locally sourced", "price", "color", "artist", "fiber type", "quality"],
            datasets: [{
                label: 'level of importance',
                data: [18, 21, 46, 75, 21, 75, 4],
                
                backgroundColor: [
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)',
                    'rgba(226, 159, 76)'
                    
                ],
                borderColor: [
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)'
                    
                ],
                borderWidth: 2,
                
                
            }]
        }
        
    });
   
   




    var sweater = document.getElementById("chart4").getContext('2d');
    var myChart = new Chart(sweater, {
        type: 'doughnut',
        options: {
        title: {
            display: true,
            text: 'How long does it take you to knit an adult worsted weight sweater?',
            fontFamily: 'Montserrat'
            
        }
        },
        data: {
            labels: ["1 - 2 weeks", "3 - 4 weeks", "1 - 2 months", "2 - 4 months", "5+ months"],
            datasets: [{
                
                data: [10, 25, 30, 22, 12],
                
                backgroundColor: [
                    'rgba(244, 244, 244)',
                    'rgba(46, 70, 79)',
                    'rgba(92, 193, 181)',
                    'rgba(196, 196, 196)',
                    'rgba(226, 159, 76)'
                    
                ],
                borderColor: [
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)',
                    'rgba(255,255, 255)'
                    
                ],
                borderWidth: 2,
                
                
            }]
        }
        
    });


   
   