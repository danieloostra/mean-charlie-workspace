function weakFinger(x, y) {
	var stride = -1;
	var count = 0;
	while (stride < y) {
		if (stride % 2 !== 0) {
			for (var i = 1; i < 6; i++) {
				if (i == x && stride == y - 1) {
					console.log("Count is", count);
					return;
				}
				console.log(i);
				count++;
				if (i == 5) {
					stride++;
				}
			}
		}
		if (stride % 2 === 0) {
			for (var i = 4; i > 1; i--) {
				if (i == x && stride == y-1) {
					console.log("Count is", count);
					return;
				}
				console.log(i);
				count++;
				if (i == 2) {
					stride++;
				}
			}
		}
	}
}

weakFinger(4, 2);