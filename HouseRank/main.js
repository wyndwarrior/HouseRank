$(document).ready(function(){
    postings = data["postings"];
    probs = data["probs"]
    design = data["design_matrix"]
    bless = data["bless_down"]
    for(var i = 0; i<probs.length; i++){
        p = postings[i]
        d = design[i]
        $("#tbody").append("<tr><td>"+probs[i].toFixed(5)+"</td>"+
            "<td><a href='"+bless[i]+"' target='blank_'>"+p["title"]+"</a></td>"+
            "<td>"+p["price"]+"</a></td>"+
            "<td>"+d[25]+"</a></td>"+
            "<td>"+d[31].toFixed(4)+" mi</a></td>"+
            +"</tr>");
    }
})