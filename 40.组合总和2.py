
# 参考的其他人的代码，还不是很清楚。
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        n = len(candidates)
        if(n==0):
            return []
        candidates.sort()

        res = []  #result
        def backtrack(i,tmp_sum,tmp_list):

            if tmp_sum == target:
                res.append(tmp_list)
                return
            for j in range(i, n):
                if tmp_sum + candidates[j]  > target : break
                if j > i and candidates[j] == candidates[j-1]:continue
                backtrack(j + 1, tmp_sum + candidates[j], tmp_list + [candidates[j]])
        backtrack(0, 0, [])
        return res
