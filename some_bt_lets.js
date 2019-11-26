//100.相同的树
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (p && q && q.val == p.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
};

//101.对称的树
var isSymmetric = function (root) {
  return mirror(root, root)

};
function mirror(left, right) {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  if (left && right && left.val === right.val) {
    return mirror(left.right, right.left) && mirror(left.left, right.right);
  } else {
    return false;
  }
}

//104  二叉树的最大深度
var maxDepth = function (root) {
  return !root ? 0 : Math.max(maxDepth(root.right) + 1, maxDepth(root.left) + 1);
};


//107 二叉树的层次遍历
// 层次遍历的思路是：用一个列表来储存树中的节点，用一个子树的个数来代表层次，不断迭代。
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let current = root;
  const res = [];
  let tempArray = [];
  const queue = [];
  let childNums = 1;
  while (current || queue.length > 0) {
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    tempArray.push(current.val);
    childNums--;
    if (childNums == 0) {
      res.unshift(tempArray);
      tempArray = [];
      childNums = queue.length;
    }
    current = queue.shift();
  }
  return res;
};

// 108.将有序数组转化为二叉搜索树
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.lenngth === 1) {
    return new TreeNode(nums[0]);
  }
  //寻找右中位数
  let mid = Math.floor((nums.length) / 2);
  const node = new TreeNode(nums[mid]);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);
  node.left = sortedArrayToBST(left);
  node.right = sortedArrayToBST(right);
  return node;
}



//110.判断平衡二叉树
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }
  if (Math.abs((getNums(root.left) - getNums(root.right))) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }

};
function getNums(root) {
  return !root ? 0 : Math.max(getNums(root.left), getNums(root.right)) + 1;
}

//二叉树的最小深度
//指从根节点到叶子节点的最小深度，需要判断的是，根节点中有子树为空时，要单独讨论。
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return !root ? 0 : Math.min(minDepth(root.left), minDepth(root.right)) + 1; 、
};


//112.路径总和
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (!root.left && !root.right && sum === 0) {
    return true;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

//226.翻转二叉树
//递归地更改二叉树的左右节点  用一个临时变量记录一个子树
var invertTree = function (root) {
  if (root) {
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.right);
    invertTree(root.left);
  }
  return root;
};

//235.二叉搜索树的最近公共祖先
//思路很简单，如果p和q的值都小于或者都大于根节点的值，那么最近的公共节点必在一边，否则最近的公共祖先节点就是根节点。
var lowestCommonAncestor = function (root, p, q) {
  let p_val = p.val;
  let q_val = q.val;
  if (!root) {
    return null;
  }
  if (p_val > root.val && q_val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p_val < root.val && q_val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

//257.二叉树的所有路径
//隐形回溯或者是递归
var binaryTreePaths = function (root) {
  const res = [];
  if (!root) {
    return res;
  }
  Paths(root, "", res);
  return res;
};
function Paths(root, str, res) {
  if (!root.left && !root.right) {
    res.push(str + root.val);
  }
  if (root.left) {
    Paths(root.left, str + root.val + "->", res);
  }
  if (root.right) {
    Paths(root.right, str + root.val + "->", res);
  }
}

//404.左叶子之和
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return null;
  }
  if (root && root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
