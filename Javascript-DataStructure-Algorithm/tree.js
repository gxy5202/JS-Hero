/**
 * 树结构和相关算法
 */

const Tree = {
    root: {
        id: 'root',
        children: [
            {
                id: 'child1',
                children: [
                    {
                        id: 'child1-1',
                        children: [
                            // 叶子节点
                            {
                                id: 'child1-1-1',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 'child2',
                children: [
                    {
                        // 叶子节点
                        id: 'child2-1',
                        children: []
                    }
                ]
            }
        ]
    }
}

/**
 * 二叉树
 * binary tree
 * 每个节点最多有两个孩子节点 leftchild rightchild
 */

// 满二叉树 full binary tree
const fullBinaryTree = {
    id: 'root',
    children: [
        {
            id: 'child1',
            children: [
                {
                    id: 'child1-1',
                },
                {
                    id: 'child1-2',
                }
            ]
        },
        {
            id: 'child2',
            children: [
                {
                    id: 'child2-1',
                },
                {
                    id: 'child2-2',
                }
            ]
        }
    ]
}

/**
 * 二叉搜索树
 */
class Node {
    key = null;
    leftNode = null;
    rightNode = null;
    constructor(key) {
        this.key = key;
    }
}

class BinarySearchTree {
    root = null;
    constructor() {}
    /**
     * 插入
     * @param {} key 
     */
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        if (key <  node.key) {
            if (node.leftNode === null) {
                node.leftNode = new Node(key);
            } else {
                this.insertNode(node.leftNode, key);
            }
        } else {
            if (node.right === null) {
                node.rightNode = new Node(key);
            } else {
                this.insertNode(node.rightNode, key);
            }
        }
    }
    /**
     * 查找
     */
    search() {

    }
    /**
     * 中序遍历节点
     */
    inOrderTraverse() {}
    /**
     * 先序遍历节点
     */
    preOrderTraverse() {}
    /**
     * 后序遍历节点
     */
    postOrderTraverse() {}
    /**
     * 返回最小值
     */
    min() {}
    /**
     * 返回最大值
     */
    max() {}
    /**
     * 移除
     * @param {*} key 
     */
    remove(key) {}
}



/**
 * 二叉树的广度优先遍历 层序遍历
 * 队列实现
 */
function levelOrderTraversal(tree) {
}