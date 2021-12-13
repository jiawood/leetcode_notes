class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        n= len(candidates)
        res = []
        def helper(i,temp_sum,temp):
            if(temp_sum>target or i==n):
                return
            if(temp_sum==target):
                res.append(temp)
                return
            helper(i,temp_sum+candidates[i],temp+[candidates[i]])
            helper(i+1,temp_sum,temp)
        helper(0,0,[])
        return res
