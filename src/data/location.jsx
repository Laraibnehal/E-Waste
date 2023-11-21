// locations.js

export const locations = [
    { lng:88.32555548587649 , lat: 22.537637779726417 }, 
    
  
  ];
  
  function findNearbyRecycleCenters(userLat, userLng, locations, radius) {
    const R = 6371; // Radius of the Earth in kilometers
  
    const nearbyCenters = locations.filter((center) => {
      const centerLat = center.lat;
      const centerLng = center.lng;
  
      const dLat = toRadians(centerLat - userLat);
      const dLng = toRadians(centerLng - userLng);
  
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(userLat)) *
          Math.cos(toRadians(centerLat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
  
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
  
      return distance <= radius;
    });
  
    return nearbyCenters;
  }
  
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  