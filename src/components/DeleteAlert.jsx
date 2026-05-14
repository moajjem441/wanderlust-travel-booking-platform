
import {AlertDialog, Button} from "@heroui/react";

const DeleteAlert = async ({destinationDetails}) => {
      const { _id,destinationName, country, category, price, duration, departureDate, imageUrl, description } = destinationDetails;

      const res = await fetch(`http://localhost:5000/destination/${_id}`,{
        method:"DELETE",
        headers:{
            'content-type':'application/json'
        }
      })
    return (
        <div>
            <AlertDialog>
      <Button variant="danger">Delete Destination</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete {} permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete {destinationName}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteAlert;



{/* <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod, quo similique exercitationem in facilis voluptatibus quasi numquam ab accusantium sequi quis deserunt? Similique odit itaque aut nostrum, eum, nobis ducimus repudiandae vitae adipisci voluptate incidunt placeat ab molestias aliquam?
</h1> */}