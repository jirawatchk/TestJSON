const TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkNGEzZjUzMDBhNGU4NTc0MDkwOTg0Yjc4M2Y3OTJjODM1M2Y4NTM1MzZhMjQwMzIzMzg0ZjYxNmU4Mjk0MTRkODhhNTM4YjczNjBhNWFmIn0.eyJhdWQiOiIyIiwianRpIjoiM2Q0YTNmNTMwMGE0ZTg1NzQwOTA5ODRiNzgzZjc5MmM4MzUzZjg1MzUzNmEyNDAzMjMzODRmNjE2ZTgyOTQxNGQ4OGE1MzhiNzM2MGE1YWYiLCJpYXQiOjE2Njk3MDk0OTksIm5iZiI6MTY2OTcwOTQ5OSwiZXhwIjoxNzAxMjQ1NDk5LCJzdWIiOiIyMzE2Iiwic2NvcGVzIjpbXX0.l8jSRCxh7PBszRGR9UAWVx19bJ0qMevws-ab1_62QUYIVGiFzk2ckl5p7_38jyWtJv9FH7Tvf9xPo-NV0x0ZcaKfks2l4SNugzqsGO_KocGUS7Lbc5bZvRVGTtucBXbUbapKePxOeWZNQFWSN8UsDzkg4RBHmyIjFBjbxqUyIrRRrL3G_YV7E9l1KJE1O3F-MfWvLe_IfDkxiC90E9xvpdIPjhkH9AfW1DF5WM0785iNqj01yxe6a1KX62KERU2vp5pQX0wpFWqg656q5W8aEFjaOjHewvlLXKPPLhW1TGpedcDi2B4EJrG1JDDjgfVPqIYGvsIBL_iq8M5jE1ZD0Vw7xAVdg5eDaqMJD-5r0DGFk7fQlbHb-E2ZfjjQIdt7VOVMqqZ7XoHNUdmPb6ZW_aXwj_5LrsyB21vvwTAjVy8XUp0mCVGHHCNErRmWldwH3VZf0EajUtIECgkRkp1w3R5HtltFfucVw-mvqt6LdaUc-IPRnbn_PowT1W9JLLUE33UAQ0Iyk6Of8mwF1DiXG9VqBjv1Pi4QyKF283_Lnv5EdpBf2nepjDg5NlG6ztiVqaApXwShk6PQdsA1R2QcQT1SPvEIFdH_JgB8WlXAYzjDbuqH3VUVmJ0X4Jv0afB37scdhx5RwyEClKkyXitvKgBGc0CKcnMfso3OCLKpEb8';
const URL = 'https://data.tmd.go.th/nwpapi/v1/forecast/location/daily';

fetch(URL,{
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
        'authorization':TOKEN
    }
}).then(res=>res.json()).then(data => console.log("DATA",data));