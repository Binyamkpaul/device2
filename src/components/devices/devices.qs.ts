import qs from "qs";

export const deviceQs = qs.stringify(
  {
    populate: {
      models: true,
    },
  },
  {
    encodeValuesOnly: true,
  }
);
export const deviceNameQs = (deviceName: string) =>
  qs.stringify(
    {
      filters: {
        name: {
          $eq: deviceName,
        },
      },
      populate: {
        models: true,
        brands: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
export const filterDeviceByIdQs = (deviceId: number) =>
  qs.stringify(
    {
      filters: {
        id: {
          $eq: deviceId,
        },
      },
      populate: {
        brands: {
          populate: {
            models: true,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

export const filterBrandsByIdQs = (brandId: number) =>
  qs.stringify(
    {
      filters: {
        id: {
          $eq: brandId,
        },
      },
      populate: {
        models: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
export const filterModelsByBrandIdQs = (brandId: number) =>
  qs.stringify(
    {
      filters: {
        id: {
          $eq: brandId,
        },
      },
      populate: {
        brands: {
          populate: {
            models: true,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
export const filterModelByIdQs = (id: number) =>
  qs.stringify(
    {
      filters: {
        id: {
          $eq: id,
        },
      },
      populate: {
        steps: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
export const filterGuidsByIdQs = (id: number) =>
  qs.stringify(
    {
      filters: {
        id: {
          $eq: id,
        },
      },
      populate: {
        guides: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
