function balance(arr,left,right)
 {
    if(left>right) // this is making that node either it is leaf or not 
    {
        return null;
    }
    let mid=Math.floor((left+right)/2)
    let node=new TreeNode(arr[mid])
    node.left=balance(arr,left,mid-1)
    node.right=balance(arr,mid+1,right)
    return node
 }
 function inorder(root,arr)
 {
    if(!root)
    {
        return null;
    }
    inorder(root.left,arr)
    arr.push(root.val)
    inorder(root.right,arr)
 }
var balanceBST = function(root) {
    let res=[]
    inorder(root,res)
    return balance(res,0,res.length-1)
};