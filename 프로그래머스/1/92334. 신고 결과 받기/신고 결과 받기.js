function solution(user_list, report, k) {
    
    const reportCount = new Map();
    
    const userReports = new Map();
   
    const result = new Array(user_list.length).fill(0);
    
   
    const uniqueReports = new Set(report);

    uniqueReports.forEach((rep) => {
        const [reporter, reported] = rep.split(" ");
        
        if (!userReports.has(reporter)) {
            userReports.set(reporter, new Set());
        }
        userReports.get(reporter).add(reported);
        
        reportCount.set(reported, (reportCount.get(reported) || 0) + 1);
    });

    reportCount.forEach((count, user) => {
        if (count >= k) {
            userReports.forEach((reportedSet, reporter) => {
                if (reportedSet.has(user)) {
                    result[user_list.indexOf(reporter)] += 1;
                }
            });
        }
    });

    return result;
}