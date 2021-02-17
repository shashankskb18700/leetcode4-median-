class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
       
         
        if (len(nums1) ==0) & (len(nums2)>0):
            u = len(nums2)/2
            if len(nums2)%2 ==0:
            
                return (nums2[math.trunc(u-1)] + nums2[math.trunc(u)])/2
            else:
                return float(nums2[math.trunc(u)])
        elif (len(nums2) ==0) & (len(nums1)>0):
            u = len(nums1)/2
            if len(nums1)%2 ==0:
            
                return (nums1[math.trunc(u-1)] + nums1[math.trunc(u)])/2
            else:
                return float(nums1[math.trunc(u)])
        
        
        elif nums1[-1]> nums2[-1]:
           l = nums1
           v = nums2
        else:
            l= nums2
            v = nums1
        arr1=0 # cares only about l
        arr2=0 # cares only about v
        botho = len(l) +len(v)
       
                
                
        
            

        # for i in range(len(l) +len(v)-1):
        while len(l) != botho:
            if v[arr2] -l[arr1] <0:
                l.insert(arr1,v[arr2])
                arr2+=1
            elif v[arr2] -l[arr1] ==0:
                l.insert(arr1,v[arr2])
                arr2+=1
                arr1+=1
               
            else:
                
                arr1+=1
        u = len(l)/2 
        if len(l)%2 ==0:
            
            return (l[math.trunc(u-1)] + l[math.trunc(u)])/2
        else:
            return float(l[math.trunc(u)])
               
