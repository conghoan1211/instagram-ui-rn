export const formatLike = (likes: number) => {
    if (likes >= 10000) {
        return `${(likes / 1000).toFixed(1)}K`;
    } else if (likes >= 1000) {
        return likes.toLocaleString('en-US');
    }
    return likes.toString();
};

export const formatComment = (likes: number) => {
    if (likes >= 10000) {
        return `${(likes / 1000).toFixed(1)}K`;
    } else if (likes >= 1000) {
        return likes.toLocaleString();
    }
    return likes.toString();
};

export const formatTimeAgo = (date: string | Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (minutes < 1) return 'vừa xong';
    else if (minutes < 60) return `${minutes} minutes`;
    else if (hours == 1) return `${hours} hour ago`;
    else if (hours < 24) return `${hours} hours ago`;
    else if (days == 1) return `${days} day ago`;
    else if (days < 30) return `${days} days ago`;

    // Format date for older posts
    const dateObj = new Date(date);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`;
};
