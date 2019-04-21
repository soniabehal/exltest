module.exports=function retrieveIDS(edges){
  const cardIds=[];
  edges.forEach(edge=>{
    let unitCardListIds=edge.node.sections_list.map(sl=>sl.cards_list.map(cl=>cl.id)).reduce((acc,cur)=>[...acc,...cur],[]);
    cardIds.push(...unitCardListIds)
  })
  return cardIds;
}