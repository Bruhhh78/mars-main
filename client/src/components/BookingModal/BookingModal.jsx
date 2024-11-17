import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext";
import { bookVisit } from "../../utils/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, email, productId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev = {}) => {
      const currentBookings = Array.isArray(prev.bookings) ? prev.bookings : [];
      return {
        ...prev,
        bookings: [
          ...currentBookings,
          {
            id: productId,
            date: dayjs(value).format("DD/MM/YYYY"),
          },
        ],
      };
    });
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, productId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => {
      toast.error(response?.data?.message || "An error occurred");
    },
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      styles={{
        title: { textAlign: 'center', width: '100%' },
      }}
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
