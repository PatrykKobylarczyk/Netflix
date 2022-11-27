import {
  onCurrentUserSubscriptionUpdate,
  Subscription,
} from "@stripe/firestore-stripe-payments";
import { useEffect, useState } from "react";
import payments from "../lib/stripe";

const useSubscription = (user) => {
  const [subscription, setSubscription] = useState(Subscription);

  useEffect(() => {
    if (!user) return;

    //Listener for subscription
    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(
        snapshot.subscriptions.filter(
          (subscription) =>
            subscription.status === "active" ||
            subscription.status === "trialing"
        )[0]
      );
    });
  }, [user]);

  return subscription;
};

export default useSubscription;
